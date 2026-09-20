import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvwxi7bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvwxi7bhr"/>`,
		"fallback": "mynaui:lock-open-solid",
	});
}

export default Component;
