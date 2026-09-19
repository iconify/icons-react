import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gst0b_6kn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gst0b_6kn"/>`,
		"fallback": "dinkie-icons:otfeature-ss03",
	});
}

export default Component;
