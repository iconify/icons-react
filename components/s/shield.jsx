import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvhnz1kyg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvhnz1kyg"/>`,
		"fallback": "bi:shield",
	});
}

export default Component;
