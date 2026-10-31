import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/w/wfprfbgbo.css';
import '../../css/q/q5atxk9tq.css';
import '../../css/y/y82tezbqu.css';
import '../../css/d/d3vz_ac7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGUoy1Bb0a" x1=".75" x2="23.25" y1="5.23" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="wfprfbgbo wm-k"/><path fill="url(#SVGUoy1Bb0a)" class="q5atxk9tq wm-s"/><path class="wm-shine y82tezbqu"/><path class="d3vz_ac7v wm-shine"/></g>`,
		"fallback": "withicons-lunar:paper-fan",
	});
}

export default Component;
