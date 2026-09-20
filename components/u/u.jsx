import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbhb5c4wf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbhb5c4wf"/>`,
		"fallback": "token:u",
	});
}

export default Component;
