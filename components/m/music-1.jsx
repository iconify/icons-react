import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuk_quudj.css';
import '../../css/w/w7hoo8bgg.css';
import '../../css/p/p9pkayb8m.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="zuk_quudj"><path class="w7hoo8bgg"/><path class="p9pkayb8m"/></g>`,
		"fallback": "marketeq:music-1",
	});
}

export default Component;
