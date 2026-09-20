import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3w7ii3ov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z3w7ii3ov"/>`,
		"fallback": "stash:user-shield",
	});
}

export default Component;
