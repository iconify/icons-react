import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh5j824-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh5j824-t"/>`,
		"fallback": "ri:links-line",
	});
}

export default Component;
