import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwxf3bbuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwxf3bbuo"/>`,
		"fallback": "ri:shuffle-line",
	});
}

export default Component;
