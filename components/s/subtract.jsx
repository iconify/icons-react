import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0ck2zo1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0ck2zo1a"/>`,
		"fallback": "proicons:subtract",
	});
}

export default Component;
