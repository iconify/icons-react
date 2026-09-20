import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfn8rcgml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfn8rcgml"/>`,
		"fallback": "tabler:time-duration-5",
	});
}

export default Component;
