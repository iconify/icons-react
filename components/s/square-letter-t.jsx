import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndp2m6blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndp2m6blf"/>`,
		"fallback": "vadivam:square-letter-t",
	});
}

export default Component;
