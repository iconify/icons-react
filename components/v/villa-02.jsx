import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pq6o2nbsn.css';
import '../../css/i/ix-aogo6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pq6o2nbsn"/><path class="ix-aogo6q"/></g>`,
		"fallback": "hugeicons:villa-02",
	});
}

export default Component;
