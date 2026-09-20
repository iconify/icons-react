import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6uc1hb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6uc1hb5x"/>`,
		"fallback": "mage:question-mark-square-fill",
	});
}

export default Component;
