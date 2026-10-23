import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcj0egbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcj0egbqd"/>`,
		"fallback": "vadivam:save-plus",
	});
}

export default Component;
