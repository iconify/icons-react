import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qafyagj9n.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qafyagj9n"/>`,
		"fallback": "dinkie-icons:view-grid-small",
	});
}

export default Component;
