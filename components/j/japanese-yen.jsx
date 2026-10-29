import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m28cpcovm.css';
import '../../css/o/oceiybcet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m28cpcovm"/><path class="oceiybcet wm-a"/></g>`,
		"fallback": "withicons:japanese-yen",
	});
}

export default Component;
