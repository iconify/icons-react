import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec-8y-b9c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec-8y-b9c"/>`,
		"fallback": "qlementine-icons:pen-16",
	});
}

export default Component;
