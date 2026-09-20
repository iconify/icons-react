import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uho2wkbps.css';
import '../../css/f/f4q1ngy9p.css';
import '../../css/i/igw_lbcrs.css';
import '../../css/l/l2hj_nb3x.css';
import '../../css/m/m2p93h8dr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uho2wkbps"/><path class="f4q1ngy9p"/><path class="igw_lbcrs"/><path class="l2hj_nb3x"/><path class="m2p93h8dr"/>`,
		"fallback": "streamline-emojis:united-states",
	});
}

export default Component;
