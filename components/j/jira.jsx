import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyu939b7n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyu939b7n"/>`,
		"fallback": "devicon-plain:jira",
	});
}

export default Component;
