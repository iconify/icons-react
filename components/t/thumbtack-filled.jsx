import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyidn315y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyidn315y"/>`,
		"fallback": "reicon:thumbtack-filled",
	});
}

export default Component;
