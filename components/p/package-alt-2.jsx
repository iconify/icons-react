import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/w7lfhmbwk.css';
import '../../css/p/pard6diuc.css';
import '../../css/k/kou1ambby.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="w7lfhmbwk"/><path class="pard6diuc"/><path class="kou1ambby"/></g>`,
		"fallback": "marketeq:package-alt-2",
	});
}

export default Component;
