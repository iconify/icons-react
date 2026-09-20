import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eebw1zmin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eebw1zmin"/>`,
		"fallback": "ri:meteor-line",
	});
}

export default Component;
