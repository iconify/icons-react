import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddetofp6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddetofp6b"/>`,
		"fallback": "thesvg-color:moonshot",
	});
}

export default Component;
