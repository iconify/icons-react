import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjqj978si.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kjqj978si"/>`,
		"fallback": "streamline-color:module-three-flat",
	});
}

export default Component;
