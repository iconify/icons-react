import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgmt3t6qv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rgmt3t6qv"/>`,
		"fallback": "griddy-icons:luggage",
	});
}

export default Component;
