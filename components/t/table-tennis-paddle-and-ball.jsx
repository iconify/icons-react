import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njo7p1bqx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njo7p1bqx"/>`,
		"fallback": "dinkie-icons:table-tennis-paddle-and-ball",
	});
}

export default Component;
