import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/veiumxu1l.css';
import '../../css/v/vulyhfb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="veiumxu1l"/><path class="vulyhfb7r"/></g>`,
		"fallback": "proicons:regular-expression",
	});
}

export default Component;
