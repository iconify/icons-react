import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kjg1o2b5d.css';
import '../../css/a/apeph7sdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kjg1o2b5d"/><path class="apeph7sdc"/></g>`,
		"fallback": "hugeicons:waste-restore",
	});
}

export default Component;
