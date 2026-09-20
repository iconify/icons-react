import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meyp7-bkw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meyp7-bkw"/>`,
		"fallback": "pinhead:nine",
	});
}

export default Component;
