import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_h132a_m.css';
import '../../css/f/fm754gtlz.css';
import '../../css/u/u9ev1ubbm.css';
import '../../css/b/b_-ksp75g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_h132a_m"/><path class="fm754gtlz"/><path class="u9ev1ubbm"/><path class="b_-ksp75g"/>`,
		"fallback": "fxemoji:palmtree",
	});
}

export default Component;
