import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/eoy38-b2r.css';
import '../../css/u/urp-s4t3i.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="eoy38-b2r"/><path class="urp-s4t3i"/></g>`,
		"fallback": "marketeq:left-direction",
	});
}

export default Component;
