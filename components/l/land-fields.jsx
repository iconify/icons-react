import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flis2iisx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flis2iisx"/>`,
		"fallback": "mdi:land-fields",
	});
}

export default Component;
