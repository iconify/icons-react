import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqim6db5p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqim6db5p"/>`,
		"fallback": "lsicon:order-integral-outline",
	});
}

export default Component;
