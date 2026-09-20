import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m10ymsugb.css';
import '../../css/u/ufvkgz_hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="m10ymsugb"/><path class="ufvkgz_hq"/></g>`,
		"fallback": "lets-icons:sun-light",
	});
}

export default Component;
