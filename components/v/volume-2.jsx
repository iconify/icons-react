import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jekw5_btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jekw5_btw"/>`,
		"fallback": "vadivam:volume-2",
	});
}

export default Component;
