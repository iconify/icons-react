import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac71--tdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac71--tdy"/>`,
		"fallback": "ri:shadow-line",
	});
}

export default Component;
