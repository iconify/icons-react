import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6avd7p5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6avd7p5r"/>`,
		"fallback": "withicons:microwave-solid",
	});
}

export default Component;
