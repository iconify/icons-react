import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cioe-sbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cioe-sbgb"/>`,
		"fallback": "vadivam:utensils-crossed",
	});
}

export default Component;
