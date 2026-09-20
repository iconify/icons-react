import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4-9ft8yr.css';
import '../../css/w/wjd-1y1hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i4-9ft8yr"/><path clip-rule="evenodd" class="wjd-1y1hf"/></g>`,
		"fallback": "streamline-sharp-color:triangle-flag-flat",
	});
}

export default Component;
