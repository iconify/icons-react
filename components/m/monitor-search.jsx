import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glh1rubhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glh1rubhg"/>`,
		"fallback": "noviair:monitor-search",
	});
}

export default Component;
