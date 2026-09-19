import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tegfuw84b.css';
import '../../css/u/ub1g9bczo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="tegfuw84b"/><path class="ub1g9bczo"/></g>`,
		"fallback": "charm:trophy",
	});
}

export default Component;
