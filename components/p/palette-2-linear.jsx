import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mz90dcccr.css';
import '../../css/v/va0wxdzar.css';
import '../../css/z/zzoxeseho.css';
import '../../css/f/fwccf37wm.css';
import '../../css/m/makdssbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mz90dcccr"/><circle class="va0wxdzar"/><circle class="zzoxeseho"/><path class="fwccf37wm"/><path class="makdssbcx"/></g>`,
		"fallback": "solar:palette-2-linear",
	});
}

export default Component;
