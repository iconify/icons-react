import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p77qebnsh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p77qebnsh"/>`,
		"fallback": "dinkie-icons:otfeature-subs-small-filled",
	});
}

export default Component;
