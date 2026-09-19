import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_b5ckbap.css';
import '../../css/z/zo6arnkly.css';
import '../../css/e/eo2tmu8cn.css';
import '../../css/f/fr8pgfmxn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l_b5ckbap"/><path clip-rule="evenodd" class="zo6arnkly"/><path class="eo2tmu8cn"/><path class="fr8pgfmxn"/></g>`,
		"fallback": "glyphs-poly:kayak",
	});
}

export default Component;
