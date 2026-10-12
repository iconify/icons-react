import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9--0ac3k.css';
import '../../css/x/xe4gu0bmx.css';
import '../../css/v/ve_wlnb3r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9--0ac3k"/><path class="xe4gu0bmx"/><path class="ve_wlnb3r"/>`,
		"fallback": "energy-icons:mop-20-bold",
	});
}

export default Component;
