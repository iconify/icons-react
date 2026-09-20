import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiijosb5q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiijosb5q"/>`,
		"fallback": "pinhead:person-speaking-to-amphitheater",
	});
}

export default Component;
