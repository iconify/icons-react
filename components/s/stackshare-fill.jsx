import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-7_-31ex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-7_-31ex"/>`,
		"fallback": "ri:stackshare-fill",
	});
}

export default Component;
