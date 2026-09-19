import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gase_7b4q.css';
import '../../css/h/hvi-ie_cu.css';
import '../../css/f/f3f__iguo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gase_7b4q"/><path class="hvi-ie_cu"/><path class="f3f__iguo"/></g>`,
		"fallback": "fluent-emoji-flat:low-battery",
	});
}

export default Component;
