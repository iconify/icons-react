import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeaudz1zt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeaudz1zt"/>`,
		"fallback": "fa7-solid:microphone-slash",
	});
}

export default Component;
