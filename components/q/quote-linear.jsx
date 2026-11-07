import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p0ywq7brl.css';
import '../../css/z/zbrtlabdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p0ywq7brl"/><path class="zbrtlabdh"/></g>`,
		"fallback": "solar:quote-linear",
	});
}

export default Component;
