import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9ur76w_a.css';
import '../../css/j/jko7jdb1p.css';
import '../../css/k/kegm3l0rb.css';
import '../../css/j/jhy2qrb_o.css';
import '../../css/k/k1uq304yb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9ur76w_a"/><path class="jko7jdb1p"/><path class="kegm3l0rb"/><path class="jhy2qrb_o"/><circle transform="matrix(0 -1 -1 0 10 14)" class="k1uq304yb"/><circle transform="matrix(0 -1 -1 0 16 14)" class="k1uq304yb"/></g>`,
		"fallback": "icon-park:source-code",
	});
}

export default Component;
