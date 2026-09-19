import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/h2po03bxv.css';
import '../../css/f/f1er5e3yx.css';
import '../../css/d/dw0vfobux.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="h2po03bxv"/><circle class="f1er5e3yx"/><path class="dw0vfobux"/></g>`,
		"fallback": "garden:voicemail-stroke-12",
	});
}

export default Component;
