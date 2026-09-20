import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcea5wauz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcea5wauz"/>`,
		"fallback": "simple-icons:spreaker",
	});
}

export default Component;
