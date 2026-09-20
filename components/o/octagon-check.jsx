import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g4a5ve-ee.css';
import '../../css/x/xoeulgbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g4a5ve-ee"/><path class="xoeulgbfv"/></g>`,
		"fallback": "mynaui:octagon-check",
	});
}

export default Component;
