import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd1t7_zvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd1t7_zvh"/>`,
		"fallback": "withicons:thumbs-up-gloss",
	});
}

export default Component;
