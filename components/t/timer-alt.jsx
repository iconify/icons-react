import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfoggqb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfoggqb5w"/>`,
		"fallback": "reicon:timer-alt",
	});
}

export default Component;
