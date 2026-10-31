import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwt69b86a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwt69b86a"/>`,
		"fallback": "withicons:router-gloss",
	});
}

export default Component;
