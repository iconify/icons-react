import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3fq8e7_z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3fq8e7_z"/>`,
		"fallback": "lsicon:order-abnormal-outline",
	});
}

export default Component;
