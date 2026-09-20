import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/f3lp0zl_i.css';
import '../../css/m/m-fp1er6w.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="f3lp0zl_i"/><path class="m-fp1er6w"/></g>`,
		"fallback": "marketeq:vase-2",
	});
}

export default Component;
