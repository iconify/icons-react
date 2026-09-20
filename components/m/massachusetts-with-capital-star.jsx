import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slim3-b5y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slim3-b5y"/>`,
		"fallback": "pinhead:massachusetts-with-capital-star",
	});
}

export default Component;
