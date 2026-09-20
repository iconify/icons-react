import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/b7zqwnbxs.css';
import '../../css/w/ww4mc0r5z.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="b7zqwnbxs"/><path class="ww4mc0r5z"/></g>`,
		"fallback": "marketeq:jet-plane-right",
	});
}

export default Component;
