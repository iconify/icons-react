import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au8nzfblf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au8nzfblf"/>`,
		"fallback": "dinkie-icons:trolleybus",
	});
}

export default Component;
