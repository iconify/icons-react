import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1712w5xs.css';
import '../../css/d/dbl1jubiy.css';
import '../../css/t/tsbi9cmqg.css';
import '../../css/b/bu74cacoq.css';
import '../../css/a/abf4n2fyn.css';
import '../../css/a/a68295n3h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1712w5xs"/><path class="dbl1jubiy"/><path class="tsbi9cmqg"/><g class="bu74cacoq"><path class="abf4n2fyn"/><path class="a68295n3h"/></g>`,
		"fallback": "flat-color-icons:invite",
	});
}

export default Component;
