import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nypwcubuv.css';
import '../../css/i/ifghkac5v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="nypwcubuv"/><path class="ifghkac5v"/></g>`,
		"fallback": "streamline:interface-time-sleep-nap-sleep-rest-break-clock",
	});
}

export default Component;
