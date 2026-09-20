import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lbdagjb_m.css';
import '../../css/i/iht7nzb1g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lbdagjb_m"/><path class="iht7nzb1g"/></g>`,
		"fallback": "streamline:play-list-4",
	});
}

export default Component;
