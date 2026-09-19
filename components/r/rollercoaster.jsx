import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt7_occ3g.css';
import '../../css/w/ww0tkqswg.css';
import '../../css/t/ta43r4_wu.css';
import '../../css/g/gkb4t6bpj.css';
import '../../css/c/cxxdn7won.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt7_occ3g"/><path class="ww0tkqswg"/><path class="ta43r4_wu"/><path class="gkb4t6bpj"/><path class="cxxdn7won"/>`,
		"fallback": "fxemoji:rollercoaster",
	});
}

export default Component;
