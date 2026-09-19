import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvwx6cb1a.css';

const viewBox = {"width":512,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvwx6cb1a"/>`,
		"fallback": "ps:maximum-temp-200-390",
	});
}

export default Component;
