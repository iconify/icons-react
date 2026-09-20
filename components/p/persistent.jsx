import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjig1n2-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjig1n2-v"/>`,
		"fallback": "thesvg-color:persistent",
	});
}

export default Component;
