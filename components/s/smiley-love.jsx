import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/b/bzerf4upu.css';
import '../../css/v/vj1cdrzkt.css';
import '../../css/d/dqr8yhb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="bzerf4upu"/><path class="vj1cdrzkt"/><path class="dqr8yhb_e"/></g>`,
		"fallback": "streamline-cyber:smiley-love",
	});
}

export default Component;
