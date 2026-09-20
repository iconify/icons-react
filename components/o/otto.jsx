import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1xuh7khf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1xuh7khf"/>`,
		"fallback": "thesvg-color:otto",
	});
}

export default Component;
