import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iopy05bgv.css';
import '../../css/z/zuilzvben.css';
import '../../css/r/rqvtl8brz.css';
import '../../css/s/sf-p1-qpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iopy05bgv"/><path class="zuilzvben"/><path class="rqvtl8brz"/><path class="sf-p1-qpm"/></g>`,
		"fallback": "hugeicons:two-factor-access",
	});
}

export default Component;
