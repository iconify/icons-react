import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr59_4bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr59_4bwc"/>`,
		"fallback": "vadivam:mail-warning",
	});
}

export default Component;
