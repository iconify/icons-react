import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyte-2bjh.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyte-2bjh"/>`,
		"fallback": "jam:phone-f",
	});
}

export default Component;
