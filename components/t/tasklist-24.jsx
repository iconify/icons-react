import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi7e1ubdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi7e1ubdk"/>`,
		"fallback": "octicon:tasklist-24",
	});
}

export default Component;
