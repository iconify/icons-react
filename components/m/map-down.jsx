import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cujg5k7cs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cujg5k7cs"/>`,
		"fallback": "tabler:map-down",
	});
}

export default Component;
