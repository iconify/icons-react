import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/o/o9j0d4xbo.css';
import '../../css/i/i-vmawbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="o9j0d4xbo"/><path class="i-vmawbvn"/></g>`,
		"fallback": "lets-icons:tablet",
	});
}

export default Component;
