import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwidl54qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwidl54qi"/>`,
		"fallback": "tabler:location-plus",
	});
}

export default Component;
