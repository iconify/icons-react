import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jptf_ac8q.css';
import '../../css/f/f9um1_k4u.css';
import '../../css/f/f225dfb_p.css';
import '../../css/s/sti_-wewq.css';
import '../../css/e/e1ubnqbzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGknLNndXM" x1="-1479.357" x2="-1468.689" y1="617.851" y2="617.851" gradientTransform="matrix(0 -47.9946 -47.9946 0 29909.484 -70489.14)" gradientUnits="userSpaceOnUse"><stop offset="0" class="jptf_ac8q"/><stop offset="1" class="f9um1_k4u"/></linearGradient><path fill="url(#SVGknLNndXM)" class="f225dfb_p"/><path class="sti_-wewq"/><path class="e1ubnqbzl"/>`,
		"fallback": "selfhst:ombi",
	});
}

export default Component;
