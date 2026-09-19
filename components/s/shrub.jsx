import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b8g23dwwd.css';
import '../../css/u/ukpu1iblv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="b8g23dwwd"/><path class="ukpu1iblv"/></g>`,
		"fallback": "hugeicons:shrub",
	});
}

export default Component;
