import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vptlwka5g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vptlwka5g"/>`,
		"fallback": "qlementine-icons:speed-16",
	});
}

export default Component;
