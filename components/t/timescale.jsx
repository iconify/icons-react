import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nufbcev0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nufbcev0k"/>`,
		"fallback": "thesvg-color:timescale",
	});
}

export default Component;
