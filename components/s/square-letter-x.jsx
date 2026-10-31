import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0li63b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0li63b9c"/>`,
		"fallback": "vadivam:square-letter-x",
	});
}

export default Component;
