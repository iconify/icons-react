import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e2k9klemp.css';
import '../../css/m/mwc9s5vvp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e2k9klemp"/><circle class="mwc9s5vvp"/></g>`,
		"fallback": "streamline:interface-weather-sun-2-cloud-meteorology-cloudy-partly-sunny-weather",
	});
}

export default Component;
