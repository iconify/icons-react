import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0ft814pq.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0ft814pq"/>`,
		"fallback": "dinkie-icons:keycap-tab-small-filled",
	});
}

export default Component;
