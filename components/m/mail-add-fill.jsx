import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy8gchbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy8gchbhb"/>`,
		"fallback": "ri:mail-add-fill",
	});
}

export default Component;
