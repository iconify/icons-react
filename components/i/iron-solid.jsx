import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql-w3z2ta.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ql-w3z2ta"/>`,
		"fallback": "streamline-flex:iron-solid",
	});
}

export default Component;
