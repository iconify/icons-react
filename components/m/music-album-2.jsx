import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dgq8ujbev.css';
import '../../css/i/iyldn6b4j.css';
import '../../css/h/hqofeaczp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="dgq8ujbev"/><path class="iyldn6b4j"/><path class="hqofeaczp"/></g>`,
		"fallback": "marketeq:music-album-2",
	});
}

export default Component;
