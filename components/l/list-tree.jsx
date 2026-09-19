import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dejkkt26f.css';
import '../../css/q/q2a26fj3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dejkkt26f"/><path class="q2a26fj3w"/></g>`,
		"fallback": "hugeicons:list-tree",
	});
}

export default Component;
