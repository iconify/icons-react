import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we467pf1g.css';
import '../../css/x/x_1cdpl8v.css';
import '../../css/t/t-r0b5wbf.css';
import '../../css/u/uaq6dzbze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we467pf1g"/><path class="x_1cdpl8v"/><path class="t-r0b5wbf"/><path class="uaq6dzbze"/>`,
		"fallback": "selfhst:linux-containers-lxc-dark",
	});
}

export default Component;
