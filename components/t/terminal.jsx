import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jphtyabjs.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jphtyabjs"/>`,
		"fallback": "jam:terminal",
	});
}

export default Component;
