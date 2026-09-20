import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1fb5gb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1fb5gb7q"/>`,
		"fallback": "thesvg-color:surveymonkey",
	});
}

export default Component;
