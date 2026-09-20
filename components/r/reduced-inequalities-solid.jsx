import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3wyhs5se.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q3wyhs5se"/>`,
		"fallback": "streamline-flex:reduced-inequalities-solid",
	});
}

export default Component;
