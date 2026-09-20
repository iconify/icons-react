import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhztmo4mr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhztmo4mr"/>`,
		"fallback": "pinhead:pennsylvania-with-capital-star",
	});
}

export default Component;
