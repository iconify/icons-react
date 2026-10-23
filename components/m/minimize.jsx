import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tui3b-bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tui3b-bby"/>`,
		"fallback": "vadivam:minimize",
	});
}

export default Component;
