import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-pjibzbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-pjibzbw"/>`,
		"fallback": "ri:user-shared-fill",
	});
}

export default Component;
