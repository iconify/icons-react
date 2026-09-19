import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rhh986b1a.css';
import '../../css/e/evnrmr1mo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rhh986b1a"/><path class="evnrmr1mo"/></g>`,
		"fallback": "hugeicons:router-02",
	});
}

export default Component;
