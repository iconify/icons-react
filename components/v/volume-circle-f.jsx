import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmf4wli9x.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmf4wli9x"/>`,
		"fallback": "jam:volume-circle-f",
	});
}

export default Component;
