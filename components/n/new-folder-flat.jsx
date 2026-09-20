import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqmd109zb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eqmd109zb"/>`,
		"fallback": "streamline-flex-color:new-folder-flat",
	});
}

export default Component;
