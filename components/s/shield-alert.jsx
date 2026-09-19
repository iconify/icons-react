import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryhcp-7eh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryhcp-7eh"/>`,
		"fallback": "carbon:shield-alert",
	});
}

export default Component;
