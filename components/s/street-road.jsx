import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xg_ma_asz.css';
import '../../css/i/i5idvku6u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xg_ma_asz"/><path class="i5idvku6u"/></g>`,
		"fallback": "streamline-flex-color:street-road",
	});
}

export default Component;
