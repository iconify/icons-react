import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/j/jq48ark5c.css';
import '../../css/c/c3qpw47ql.css';
import '../../css/o/odvh9mb7p.css';
import '../../css/e/e9h4qybhw.css';
import '../../css/c/cgj-dhbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGPBpmxbcg" x1="1.5" x2="22.5" y1="1.5" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGPBpmxbcg)" class="jq48ark5c wm-k"/><path class="c3qpw47ql wm-a"/><path stroke="url(#SVGPBpmxbcg)" class="odvh9mb7p wm-s"/><path class="e9h4qybhw wm-shine"/><path class="cgj-dhbiq wm-shine"/></g>`,
		"fallback": "withicons-lunar:sunset",
	});
}

export default Component;
