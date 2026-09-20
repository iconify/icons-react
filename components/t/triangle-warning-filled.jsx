import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du6iv0jkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du6iv0jkk"/>`,
		"fallback": "reicon:triangle-warning-filled",
	});
}

export default Component;
