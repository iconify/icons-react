import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9ydt-b_y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9ydt-b_y"/>`,
		"fallback": "pinhead:tennessee-with-capital-star",
	});
}

export default Component;
