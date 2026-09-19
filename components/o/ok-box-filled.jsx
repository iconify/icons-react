import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iub-4pq8s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iub-4pq8s"/>`,
		"fallback": "dinkie-icons:ok-box-filled",
	});
}

export default Component;
