import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dle73-aae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dle73-aae"/>`,
		"fallback": "thesvg-color:quantcast",
	});
}

export default Component;
