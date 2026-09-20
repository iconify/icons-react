import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/wjg5129at.css';
import '../../css/z/zd4hgfb3r.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="wjg5129at"/><path class="zd4hgfb3r"/></g>`,
		"fallback": "marketeq:pencil-ruler",
	});
}

export default Component;
