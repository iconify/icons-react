import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctes0nbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctes0nbrt"/>`,
		"fallback": "reicon:repeat-circle-filled",
	});
}

export default Component;
