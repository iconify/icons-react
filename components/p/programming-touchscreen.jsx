import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w34osu__y.css';
import '../../css/m/mmbz02bgz.css';
import '../../css/a/akaq_eb1m.css';
import '../../css/b/b-kuwob2a.css';
import '../../css/c/cuk0mtl4o.css';
import '../../css/d/da4_evbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="w34osu__y"><path class="mmbz02bgz"/><path class="akaq_eb1m"/><path class="b-kuwob2a"/><path class="cuk0mtl4o"/><path class="da4_evbph"/></g>`,
		"fallback": "streamline-cyber:programming-touchscreen",
	});
}

export default Component;
