import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mdn8cibnw.css';
import '../../css/i/ifxdngbna.css';
import '../../css/p/p2xmk4byv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mdn8cibnw"/><path class="ifxdngbna"/><path class="p2xmk4byv"/></g>`,
		"fallback": "streamline:speaker-1",
	});
}

export default Component;
