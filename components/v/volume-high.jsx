import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xdj55ubkl.css';
import '../../css/k/k1tekhkix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xdj55ubkl"/><path class="k1tekhkix"/></g>`,
		"fallback": "mynaui:volume-high",
	});
}

export default Component;
