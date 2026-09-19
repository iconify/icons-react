import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rif72lcwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rif72lcwa"/>`,
		"fallback": "gg:pentagon-bottom-left",
	});
}

export default Component;
