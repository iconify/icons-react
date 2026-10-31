import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf9gkkbkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf9gkkbkw"/>`,
		"fallback": "vadivam:letter-i",
	});
}

export default Component;
