import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuisidc2h.css';
import '../../css/k/kensec86u.css';
import '../../css/t/tuvs7pa-d.css';
import '../../css/j/j-0-v4b_h.css';
import '../../css/x/xfkcrqbqu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuisidc2h"/><path class="kensec86u"/><path class="tuvs7pa-d"/><path class="j-0-v4b_h"/><path class="xfkcrqbqu"/>`,
		"fallback": "selfhst:pve-ups",
	});
}

export default Component;
