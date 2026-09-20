import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oejd0_69w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oejd0_69w"/>`,
		"fallback": "simple-icons:loops",
	});
}

export default Component;
