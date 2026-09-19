import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/x7ptq8p-g.css';
import '../../css/z/zm--xre6q.css';
import '../../css/c/ca7cldnps.css';
import '../../css/m/mhekwub7m.css';
import '../../css/p/ps9jkkbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="x7ptq8p-g"/><path class="zm--xre6q"/><path class="ca7cldnps"/><path class="mhekwub7m"/><path class="ps9jkkbrq"/></g>`,
		"fallback": "bitcoin-icons:podcast-outline",
	});
}

export default Component;
