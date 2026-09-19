import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu4e92lgi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu4e92lgi"/>`,
		"fallback": "bi:screwdriver",
	});
}

export default Component;
