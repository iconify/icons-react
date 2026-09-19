import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gijyo05ck.css';
import '../../css/l/l0-cexb8m.css';
import '../../css/a/a1k_o6b_u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gijyo05ck"/><path class="l0-cexb8m"/><path class="a1k_o6b_u"/>`,
		"fallback": "devicon:nim-wordmark",
	});
}

export default Component;
