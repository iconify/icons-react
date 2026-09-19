import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wheiic_ie.css';
import '../../css/t/t_a38r7nw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="wheiic_ie"/><line x1="2.25" x2="13.75" y1="8.25" y2="8.25"/><path class="t_a38r7nw"/></g>`,
		"fallback": "charm:server",
	});
}

export default Component;
