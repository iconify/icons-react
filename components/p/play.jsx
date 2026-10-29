import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctpa_3nxf.css';
import '../../css/u/u571t7e3d.css';
import '../../css/k/ks-pocc6v.css';
import '../../css/d/dw9t-sbwu.css';
import '../../css/f/f8j6zlb-i.css';
import '../../css/a/a93pcwb-r.css';
import '../../css/m/mgwhs4bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctpa_3nxf wm-shadow"/><path class="u571t7e3d wm-k"/><path class="ks-pocc6v wm-k"/><path class="dw9t-sbwu wm-k"/><path class="f8j6zlb-i wm-k"/><path class="a93pcwb-r wm-k"/><path class="mgwhs4bux wm-shine"/>`,
		"fallback": "withicons-pastel:play",
	});
}

export default Component;
