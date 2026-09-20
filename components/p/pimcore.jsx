import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1_-qsb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1_-qsb1r"/>`,
		"fallback": "thesvg-color:pimcore",
	});
}

export default Component;
