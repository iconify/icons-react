import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/j3ipt_bwp.css';
import '../../css/m/m28ktvtjt.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="j3ipt_bwp"/><path class="m28ktvtjt"/></g>`,
		"fallback": "marketeq:minimize-size",
	});
}

export default Component;
