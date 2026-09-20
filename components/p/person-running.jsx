import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu60hnbbv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu60hnbbv"/>`,
		"fallback": "pinhead:person-running",
	});
}

export default Component;
