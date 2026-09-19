import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lje0eit7z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lje0eit7z"/>`,
		"fallback": "carbon:logo-yelp",
	});
}

export default Component;
