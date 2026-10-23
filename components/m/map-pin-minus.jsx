import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2e40ccms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2e40ccms"/>`,
		"fallback": "vadivam:map-pin-minus",
	});
}

export default Component;
