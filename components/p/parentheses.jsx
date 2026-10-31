import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-jozgb6w.css';
import '../../css/v/v7kyj877r.css';
import '../../css/x/x5ianxb9l.css';
import '../../css/e/e38lcjnql.css';
import '../../css/k/k--kz1b0x.css';
import '../../css/r/r-j6hjr6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c-jozgb6w wm-shadow"/><path class="v7kyj877r wm-k"/><path class="wm-k x5ianxb9l"/><path class="e38lcjnql wm-k"/><path class="k--kz1b0x wm-k"/><path class="r-j6hjr6e wm-shine"/></g>`,
		"fallback": "withicons-coquette:parentheses",
	});
}

export default Component;
