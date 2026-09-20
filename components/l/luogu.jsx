import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghed69pzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghed69pzf"/>`,
		"fallback": "thesvg-color:luogu",
	});
}

export default Component;
