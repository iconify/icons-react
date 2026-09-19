import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gbozk00cm.css';
import '../../css/v/vpwn2h6_y.css';
import '../../css/g/g4zs08s-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gbozk00cm"/><path class="vpwn2h6_y"/><path class="g4zs08s-q"/></g>`,
		"fallback": "hugeicons:nine-circle",
	});
}

export default Component;
