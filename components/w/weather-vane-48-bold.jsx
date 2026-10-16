import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it1t7rbgl.css';
import '../../css/q/q4xrfybks.css';
import '../../css/w/wj41wcbwv.css';
import '../../css/b/btuq2abvy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it1t7rbgl"/><path class="q4xrfybks"/><path class="wj41wcbwv"/><path class="btuq2abvy"/>`,
		"fallback": "energy-icons:weather-vane-48-bold",
	});
}

export default Component;
