import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppb6wbcqj.css';
import '../../css/a/aequepbng.css';
import '../../css/x/xfukcex6d.css';
import '../../css/m/mu_azubue.css';
import '../../css/t/to5_hpm1w.css';
import '../../css/k/kv8_af4iu.css';
import '../../css/x/x8dr3y19y.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppb6wbcqj"/><path class="aequepbng"/><path class="xfukcex6d"/><path class="mu_azubue"/><g class="to5_hpm1w"><path class="kv8_af4iu"/><path class="x8dr3y19y"/></g>`,
		"fallback": "openmoji:probing-cane",
	});
}

export default Component;
