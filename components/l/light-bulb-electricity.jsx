import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/klt1_8xud.css';
import '../../css/e/e7x5opbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="klt1_8xud"/><path class="e7x5opbnz"/></g>`,
		"fallback": "mage:light-bulb-electricity",
	});
}

export default Component;
