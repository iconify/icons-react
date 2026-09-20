import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jmv52wbro.css';
import '../../css/r/r7ipq5s-n.css';
import '../../css/a/axjtsp52f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jmv52wbro"/><path class="r7ipq5s-n"/><path class="axjtsp52f"/></g>`,
		"fallback": "solar:slider-minimalistic-horizontal-broken",
	});
}

export default Component;
