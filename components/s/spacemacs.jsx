import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qze8yex4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qze8yex4l"/>`,
		"fallback": "simple-icons:spacemacs",
	});
}

export default Component;
