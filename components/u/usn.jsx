import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vunaabcms.css';
import '../../css/o/om-jm0bjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vunaabcms"/><path clip-rule="evenodd" class="om-jm0bjh"/>`,
		"fallback": "token:usn",
	});
}

export default Component;
