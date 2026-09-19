import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kdrahjc2j.css';
import '../../css/n/nqwox05ys.css';
import '../../css/l/l_eobbc0g.css';
import '../../css/v/vblc21c9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="kdrahjc2j"/><path class="nqwox05ys"/><path class="l_eobbc0g"/><path class="vblc21c9i"/></g>`,
		"fallback": "iconoir:piggy-bank",
	});
}

export default Component;
