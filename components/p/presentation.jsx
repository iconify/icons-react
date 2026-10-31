import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xa0d53bhh.css';
import '../../css/t/ttkzv_ptx.css';
import '../../css/d/dk_58dbet.css';
import '../../css/a/ar718pbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xa0d53bhh"/><path class="ttkzv_ptx wm-shadow"/><path class="dk_58dbet"/><path class="ar718pbja"/></g>`,
		"fallback": "withicons-brutal:presentation",
	});
}

export default Component;
