import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auyq2-22y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auyq2-22y"/>`,
		"fallback": "mdi:table-question",
	});
}

export default Component;
