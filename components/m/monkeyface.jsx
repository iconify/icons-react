import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxcnp6gvb.css';
import '../../css/i/izmrif76v.css';
import '../../css/v/v79wol1zy.css';
import '../../css/o/oofbtzbxx.css';
import '../../css/s/sf4-4ac8s.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxcnp6gvb"/><path class="izmrif76v"/><path class="v79wol1zy"/><path class="oofbtzbxx"/><path class="sf4-4ac8s"/>`,
		"fallback": "fxemoji:monkeyface",
	});
}

export default Component;
