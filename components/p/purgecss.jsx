import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aogk6ik8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aogk6ik8w"/>`,
		"fallback": "thesvg-color:purgecss",
	});
}

export default Component;
