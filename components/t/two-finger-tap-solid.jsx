import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_6--gbly.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q_6--gbly"/>`,
		"fallback": "streamline:two-finger-tap-solid",
	});
}

export default Component;
