import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bin4q55ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bin4q55ni"/>`,
		"fallback": "keyline-icons:plane-takeoff-sharp",
	});
}

export default Component;
