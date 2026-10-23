import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va_2e8zin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va_2e8zin"/>`,
		"fallback": "vadivam:mail-question-mark",
	});
}

export default Component;
