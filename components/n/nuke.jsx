import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfn10abcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfn10abcw"/>`,
		"fallback": "simple-icons:nuke",
	});
}

export default Component;
