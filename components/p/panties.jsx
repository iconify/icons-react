import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/s/sk8qu0bcv.css';
import '../../css/r/rp2gc-bal.css';
import '../../css/b/boyoj9f7j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="sk8qu0bcv"/><path class="rp2gc-bal"/><path class="boyoj9f7j"/></g>`,
		"fallback": "icon-park:panties",
	});
}

export default Component;
