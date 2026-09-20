import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/ww-3rfhjt.css';
import '../../css/k/knrbm_bay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ww-3rfhjt"/><path class="knrbm_bay"/></g>`,
		"fallback": "tdesign:system-components",
	});
}

export default Component;
