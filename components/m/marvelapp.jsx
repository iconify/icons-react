import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y67uuy_3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y67uuy_3i"/>`,
		"fallback": "thesvg:marvelapp",
	});
}

export default Component;
