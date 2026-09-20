import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxttq7g5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxttq7g5f"/>`,
		"fallback": "mynaui:location-solid",
	});
}

export default Component;
