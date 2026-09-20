import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe9ard3ii.css';
import '../../css/o/o2ezd7b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe9ard3ii"/><path class="o2ezd7b3i"/>`,
		"fallback": "uim:sign-in-alt",
	});
}

export default Component;
