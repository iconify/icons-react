import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw4qn3b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw4qn3b5a"/>`,
		"fallback": "ri:list-view",
	});
}

export default Component;
