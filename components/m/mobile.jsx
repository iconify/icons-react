import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nkye9-36h.css';
import '../../css/t/tossrcb3i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="nkye9-36h"/><path class="tossrcb3i"/></g>`,
		"fallback": "charm:mobile",
	});
}

export default Component;
