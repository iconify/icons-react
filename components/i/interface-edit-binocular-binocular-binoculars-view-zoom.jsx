import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o9jkvab_f.css';
import '../../css/x/xcs8l2-1f.css';
import '../../css/r/rqle2ryay.css';
import '../../css/e/e2s3ijb-z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="o9jkvab_f"/><path class="xcs8l2-1f"/><circle class="rqle2ryay"/><path class="e2s3ijb-z"/></g>`,
		"fallback": "streamline:interface-edit-binocular-binocular-binoculars-view-zoom",
	});
}

export default Component;
