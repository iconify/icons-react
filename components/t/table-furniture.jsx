import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjo4cywis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjo4cywis"/>`,
		"fallback": "mdi:table-furniture",
	});
}

export default Component;
