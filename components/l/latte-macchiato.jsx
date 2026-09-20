import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p75wmtbsb.css';
import '../../css/o/ogk2mbb7h.css';
import '../../css/f/fi9pfkden.css';
import '../../css/l/l0kyiebgr.css';
import '../../css/s/stxlbistq.css';
import '../../css/z/zm85r1ble.css';
import '../../css/k/ksuhhdb7w.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p75wmtbsb"/><path clip-rule="evenodd" class="ogk2mbb7h"/><path class="fi9pfkden"/><path clip-rule="evenodd" class="l0kyiebgr"/><path clip-rule="evenodd" class="stxlbistq"/><path class="zm85r1ble"/><path class="ksuhhdb7w"/>`,
		"fallback": "openmoji:latte-macchiato",
	});
}

export default Component;
