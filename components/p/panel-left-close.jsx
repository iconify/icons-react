import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/laiauramu.css';
import '../../css/q/quk-34b0j.css';
import '../../css/c/cvpr-5bot.css';
import '../../css/l/l3ffq6ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="laiauramu wm-shadow"/><path class="quk-34b0j wm-shadow"/><path class="cvpr-5bot"/><path class="l3ffq6ben"/></g>`,
		"fallback": "withicons-brutal:panel-left-close",
	});
}

export default Component;
