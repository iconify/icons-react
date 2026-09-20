import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq_olcclz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq_olcclz"/>`,
		"fallback": "thesvg-color:perl",
	});
}

export default Component;
