import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/frqxfdc5f.css';
import '../../css/c/cw9hbob4z.css';
import '../../css/t/tc24unbff.css';
import '../../css/p/pmtfimecd.css';
import '../../css/x/xrbmpy6hd.css';
import '../../css/e/ean3its1c.css';
import '../../css/v/v6iy9db0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="frqxfdc5f wm-k"/><path class="cw9hbob4z wm-k"/><path class="tc24unbff wm-k"/><path class="pmtfimecd wm-shine"/><path class="wm-s xrbmpy6hd"/><path class="ean3its1c wm-s"/><path class="v6iy9db0s wm-s"/></g>`,
		"fallback": "withicons-anime:remove-formatting",
	});
}

export default Component;
