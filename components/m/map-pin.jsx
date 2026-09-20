import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/drm_xx1_f.css';
import '../../css/c/c-d31-rmn.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="drm_xx1_f"/><path class="c-d31-rmn"/></g>`,
		"fallback": "marketeq:map-pin",
	});
}

export default Component;
