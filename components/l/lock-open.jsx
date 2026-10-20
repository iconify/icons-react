import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvwi7cb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvwi7cb9e"/>`,
		"fallback": "vadivam:lock-open",
	});
}

export default Component;
