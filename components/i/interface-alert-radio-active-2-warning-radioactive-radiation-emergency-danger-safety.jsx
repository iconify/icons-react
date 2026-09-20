import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u74hcr8lk.css';
import '../../css/r/r_o7zxbjo.css';
import '../../css/x/x0ij0us_v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u74hcr8lk"/><path class="r_o7zxbjo"/><path class="x0ij0us_v"/></g>`,
		"fallback": "streamline:interface-alert-radio-active-2-warning-radioactive-radiation-emergency-danger-safety",
	});
}

export default Component;
