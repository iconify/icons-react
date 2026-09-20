import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmb6m4bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmb6m4bku"/>`,
		"fallback": "ri:twitter-x-line",
	});
}

export default Component;
