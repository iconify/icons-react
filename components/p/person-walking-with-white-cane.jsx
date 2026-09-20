import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m52ut1_py.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m52ut1_py"/>`,
		"fallback": "pinhead:person-walking-with-white-cane",
	});
}

export default Component;
