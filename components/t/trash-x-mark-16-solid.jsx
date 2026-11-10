import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n93l26b3l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n93l26b3l"/>`,
		"fallback": "sidekickicons:trash-x-mark-16-solid",
	});
}

export default Component;
