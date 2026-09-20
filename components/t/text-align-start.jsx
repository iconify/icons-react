import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm9pbsgds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm9pbsgds"/>`,
		"fallback": "lucide:text-align-start",
	});
}

export default Component;
