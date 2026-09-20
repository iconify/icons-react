import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyv65j9en.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyv65j9en"/>`,
		"fallback": "jam:plus-rectangle",
	});
}

export default Component;
