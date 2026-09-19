import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp37asbcv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp37asbcv"/>`,
		"fallback": "dinkie-icons:otfeature-liga-small-filled",
	});
}

export default Component;
