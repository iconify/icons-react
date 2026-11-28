import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwlpnrbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwlpnrbfp"/>`,
		"fallback": "iconaut:mouse-pointer-solid",
	});
}

export default Component;
