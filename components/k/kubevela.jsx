import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n772iyb3h.css';

const viewBox = {"width":122.5,"height":122.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n772iyb3h"/>`,
		"fallback": "thesvg:kubevela",
	});
}

export default Component;
