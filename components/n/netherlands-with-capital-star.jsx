import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz5-qd-5o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz5-qd-5o"/>`,
		"fallback": "pinhead:netherlands-with-capital-star",
	});
}

export default Component;
