import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqie4kb4q.css';
import '../../css/i/ifa7j6beo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqie4kb4q"/><path class="ifa7j6beo"/>`,
		"fallback": "eos-icons:package-upgrade",
	});
}

export default Component;
