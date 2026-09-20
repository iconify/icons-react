import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dzxztkb4u.css';
import '../../css/d/dj9zaictl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dzxztkb4u"/><path class="dj9zaictl"/></g>`,
		"fallback": "solar:transfer-vertical-broken",
	});
}

export default Component;
