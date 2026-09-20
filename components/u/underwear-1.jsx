import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n0m548b9a.css';
import '../../css/w/wp3d08bms.css';
import '../../css/o/o_5a88bhh.css';
import '../../css/k/kna42lblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n0m548b9a"/><path class="wp3d08bms"/><path class="o_5a88bhh"/><path class="kna42lblu"/></g>`,
		"fallback": "streamline-cyber-color:underwear-1",
	});
}

export default Component;
