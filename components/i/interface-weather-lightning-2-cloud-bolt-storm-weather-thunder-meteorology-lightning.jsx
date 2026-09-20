import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cnp_qvbeb.css';
import '../../css/f/f1lvhpx7o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cnp_qvbeb"/><path class="f1lvhpx7o"/></g>`,
		"fallback": "streamline:interface-weather-lightning-2-cloud-bolt-storm-weather-thunder-meteorology-lightning",
	});
}

export default Component;
