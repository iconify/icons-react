import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl-um2bwn.css';
import '../../css/x/xhea0tlij.css';
import '../../css/j/j9rmcs4ak.css';
import '../../css/j/jufp2rs3q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl-um2bwn"/><path class="xhea0tlij"/><path class="j9rmcs4ak"/><path class="jufp2rs3q"/>`,
		"fallback": "energy-icons:load-shifting-20",
	});
}

export default Component;
