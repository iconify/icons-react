import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yjkpe5pcg.css';
import '../../css/d/dn_bn20de.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yjkpe5pcg"/><path class="dn_bn20de"/></g>`,
		"fallback": "streamline:interface-time-reset-time-clock-reset-stopwatch-circle-measure-loading",
	});
}

export default Component;
