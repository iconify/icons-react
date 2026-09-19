import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viyk3hb3u.css';
import '../../css/r/rqvdmjbks.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viyk3hb3u"/><path class="rqvdmjbks"/>`,
		"fallback": "carbon:mobile-session",
	});
}

export default Component;
