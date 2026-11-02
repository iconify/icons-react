import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab7d9sbur.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab7d9sbur"/>`,
		"fallback": "pinhead:people-sleeping-in-bunkbeds-under-gabled-roof",
	});
}

export default Component;
