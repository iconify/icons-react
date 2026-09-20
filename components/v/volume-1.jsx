import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpl0q1bzo.css';
import '../../css/y/y0-c0ac4t.css';
import '../../css/d/dd6fl6u9c.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xpl0q1bzo"/><path class="y0-c0ac4t"/><path class="dd6fl6u9c"/>`,
		"fallback": "lineicons:volume-1",
	});
}

export default Component;
