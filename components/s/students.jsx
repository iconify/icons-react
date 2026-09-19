import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k8qjkbb0t.css';
import '../../css/i/igqhrwb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k8qjkbb0t"/><path class="igqhrwb4s"/></g>`,
		"fallback": "hugeicons:students",
	});
}

export default Component;
