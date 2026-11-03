import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7l7vkbti.css';
import '../../css/t/tum99jo8x.css';
import '../../css/b/bqmrhv6_g.css';
import '../../css/j/jqfd89nqw.css';
import '../../css/g/gpeifi1yb.css';
import '../../css/a/a6-mjtp3b.css';
import '../../css/x/xuppycbym.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGI6YmYdtI" x1="0" x2="0" y1="0" y2="128" gradientUnits="userSpaceOnUse"><stop offset="0" class="b7l7vkbti"/><stop offset="1" class="tum99jo8x"/></linearGradient><linearGradient id="SVGrVYBkdUq" x1="0" x2="0" y1="2.065" y2="125.935" gradientUnits="userSpaceOnUse"><stop offset="0" class="bqmrhv6_g"/><stop offset="1" class="jqfd89nqw"/></linearGradient></defs><path fill="url(#SVGI6YmYdtI)" class="gpeifi1yb"/><path fill="url(#SVGrVYBkdUq)" class="a6-mjtp3b"/><path class="xuppycbym"/>`,
		"fallback": "devicon:mysqlworkbench",
	});
}

export default Component;
