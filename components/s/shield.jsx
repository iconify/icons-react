import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anhzowk-q.css';
import '../../css/x/xusvasb8p.css';
import '../../css/k/k2sbiccsu.css';
import '../../css/k/kmv9ffktl.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="anhzowk-q"/><path clip-rule="evenodd" class="xusvasb8p"/><path clip-rule="evenodd" class="k2sbiccsu"/><path clip-rule="evenodd" class="kmv9ffktl"/>`,
		"fallback": "flat-ui:shield",
	});
}

export default Component;
