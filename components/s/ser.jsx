import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpj3fdb8c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpj3fdb8c"/>`,
		"fallback": "cryptocurrency:ser",
	});
}

export default Component;
