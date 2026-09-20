import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmz73-via.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmz73-via"/>`,
		"fallback": "thesvg:maptiler",
	});
}

export default Component;
