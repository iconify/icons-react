import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynr6deb4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ynr6deb4q"/>`,
		"fallback": "healthicons:running-water-alt",
	});
}

export default Component;
