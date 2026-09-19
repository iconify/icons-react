import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3awx8gal.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3awx8gal"/>`,
		"fallback": "carbon:visual-inspection",
	});
}

export default Component;
