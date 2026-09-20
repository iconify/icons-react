import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hier0ac3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hier0ac3g"/>`,
		"fallback": "simple-icons:warnerbros",
	});
}

export default Component;
