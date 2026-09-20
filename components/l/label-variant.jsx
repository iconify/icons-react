import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8kcr9bvu.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8kcr9bvu"/>`,
		"fallback": "memory:label-variant",
	});
}

export default Component;
