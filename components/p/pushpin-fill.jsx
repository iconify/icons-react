import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra6alvb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra6alvb2w"/>`,
		"fallback": "ri:pushpin-fill",
	});
}

export default Component;
