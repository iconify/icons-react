import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diryc7qvz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="diryc7qvz"/>`,
		"fallback": "lsicon:share-outline",
	});
}

export default Component;
