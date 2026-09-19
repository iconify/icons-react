import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5ewtco_s.css';
import '../../css/v/vpg-ykb3g.css';
import '../../css/a/axl75o_4d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5ewtco_s"/><path class="vpg-ykb3g"/><path class="axl75o_4d"/>`,
		"fallback": "carbon:soil-temperature-global",
	});
}

export default Component;
