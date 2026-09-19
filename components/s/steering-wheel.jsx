import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcrdil0dl.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbthfebdn.css';
import '../../css/n/n_xx17adb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGOksSeCFU" class="mcrdil0dl"/></defs><g class="ft5dv1b6b"><path class="wbthfebdn"/><use href="#SVGOksSeCFU"/><use href="#SVGOksSeCFU" clip-rule="evenodd"/><path class="n_xx17adb"/></g>`,
		"fallback": "icon-park-outline:steering-wheel",
	});
}

export default Component;
