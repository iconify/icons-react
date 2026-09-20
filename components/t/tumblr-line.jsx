import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-iij8-df.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-iij8-df"/>`,
		"fallback": "ri:tumblr-line",
	});
}

export default Component;
