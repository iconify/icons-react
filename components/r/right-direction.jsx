import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/zvujxe2ao.css';
import '../../css/u/udnclwc2d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="zvujxe2ao"/><path class="udnclwc2d"/></g>`,
		"fallback": "marketeq:right-direction",
	});
}

export default Component;
