import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x25h2u90g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x25h2u90g"/>`,
		"fallback": "vadivam:letter-w",
	});
}

export default Component;
