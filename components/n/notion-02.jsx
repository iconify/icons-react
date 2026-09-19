import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i3j5hcbwd.css';
import '../../css/m/m-54g_bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i3j5hcbwd"/><path class="m-54g_bma"/></g>`,
		"fallback": "hugeicons:notion-02",
	});
}

export default Component;
