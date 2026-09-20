import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqxefcirz.css';
import '../../css/c/cpkrr4b-q.css';
import '../../css/d/dw4v98ifo.css';
import '../../css/q/q4qwtgbdg.css';
import '../../css/k/k0wzcb9pi.css';
import '../../css/z/ze_ex8o5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqxefcirz"/><path class="cpkrr4b-q"/><path class="dw4v98ifo"/><path class="q4qwtgbdg"/><path class="k0wzcb9pi"/><path class="ze_ex8o5v"/>`,
		"fallback": "selfhst:nyt-letter-boxed",
	});
}

export default Component;
