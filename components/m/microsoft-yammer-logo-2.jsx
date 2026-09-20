import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s-aky6bid.css';
import '../../css/u/u1g9icbuz.css';
import '../../css/p/pbt-4o-ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s-aky6bid"/><path class="u1g9icbuz"/><path class="pbt-4o-ij"/></g>`,
		"fallback": "streamline-logos:microsoft-yammer-logo-2",
	});
}

export default Component;
