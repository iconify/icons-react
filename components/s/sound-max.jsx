import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/mpf1xoj_w.css';
import '../../css/s/s9e9dhb2i.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="mpf1xoj_w"/><path class="s9e9dhb2i"/></g>`,
		"fallback": "marketeq:sound-max",
	});
}

export default Component;
