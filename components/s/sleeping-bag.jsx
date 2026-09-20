import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jt1jeymre.css';
import '../../css/x/x7fd5rbvn.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jt1jeymre"/><path class="x7fd5rbvn"/></g>`,
		"fallback": "marketeq:sleeping-bag",
	});
}

export default Component;
