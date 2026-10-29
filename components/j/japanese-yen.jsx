import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk7_wj3gn.css';
import '../../css/g/gfkl5qbof.css';
import '../../css/c/cnepfeb0a.css';
import '../../css/f/f3vhcdbgq.css';
import '../../css/p/pmc0_bb9b.css';
import '../../css/u/u0rygz0sq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk7_wj3gn wm-shadow"/><path class="gfkl5qbof wm-k"/><path class="cnepfeb0a wm-k"/><path class="f3vhcdbgq wm-k"/><path class="pmc0_bb9b wm-k"/><path class="u0rygz0sq wm-shine"/>`,
		"fallback": "withicons-pastel:japanese-yen",
	});
}

export default Component;
