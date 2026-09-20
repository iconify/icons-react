import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6hna0bgo.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6hna0bgo"/>`,
		"fallback": "thesvg-color:stimulus",
	});
}

export default Component;
