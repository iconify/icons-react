import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl8q1_1nv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl8q1_1nv"/>`,
		"fallback": "streamline:scanner-bar-code",
	});
}

export default Component;
