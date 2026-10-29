import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnijyo0-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnijyo0-v"/>`,
		"fallback": "withicons:user-round",
	});
}

export default Component;
