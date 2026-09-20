import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fyn_rlidk.css';
import '../../css/t/tf7shdc3w.css';
import '../../css/j/j96eedb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fyn_rlidk"/><path class="tf7shdc3w"/><path class="j96eedb2a"/></g>`,
		"fallback": "streamline-ultimate-color:synchronize-arrow",
	});
}

export default Component;
