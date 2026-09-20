import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j800ybbkn.css';
import '../../css/u/uq1kqr20a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j800ybbkn"/><path class="uq1kqr20a"/></g>`,
		"fallback": "streamline:interface-arrows-bend-up-left-3-arrow-bend-curve-change-direction-up-to-left",
	});
}

export default Component;
