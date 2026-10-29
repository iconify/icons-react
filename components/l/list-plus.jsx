import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmh5bybsq.css';
import '../../css/d/dhtl_x15l.css';
import '../../css/j/j_sb_ep2n.css';
import '../../css/g/gym0h7tyy.css';
import '../../css/y/ynoxllbnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmh5bybsq wm-shadow"/><path class="dhtl_x15l wm-k"/><path class="j_sb_ep2n wm-k"/><path class="gym0h7tyy wm-s"/><path class="wm-s ynoxllbnu"/>`,
		"fallback": "withicons-pastel:list-plus",
	});
}

export default Component;
