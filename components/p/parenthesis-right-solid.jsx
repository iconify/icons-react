import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjc8iehpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjc8iehpw"/>`,
		"fallback": "iconaut:parenthesis-right-solid",
	});
}

export default Component;
