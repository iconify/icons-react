import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpz6nsfpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpz6nsfpw"/>`,
		"fallback": "ri:twitter-line",
	});
}

export default Component;
