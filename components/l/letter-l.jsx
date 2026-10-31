import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyfq9ps6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyfq9ps6b"/>`,
		"fallback": "vadivam:letter-l",
	});
}

export default Component;
