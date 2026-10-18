import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocmpz3i5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocmpz3i5d"/>`,
		"fallback": "vadivam:message-square-text",
	});
}

export default Component;
