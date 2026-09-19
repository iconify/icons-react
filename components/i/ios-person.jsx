import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z117gvw_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z117gvw_p"/>`,
		"fallback": "ion:ios-person",
	});
}

export default Component;
