import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee0hxn02z.css';

const viewBox = {"width":5,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee0hxn02z"/>`,
		"fallback": "fontisto:more-v-a",
	});
}

export default Component;
