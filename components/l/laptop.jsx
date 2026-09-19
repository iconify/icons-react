import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m81z6cc7b.css';
import '../../css/h/hm5awrbsf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="m81z6cc7b"/><path class="hm5awrbsf"/></g>`,
		"fallback": "charm:laptop",
	});
}

export default Component;
