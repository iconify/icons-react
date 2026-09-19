import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9k5qybjm.css';
import '../../css/v/vjhtv-b4n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9k5qybjm"/><path class="vjhtv-b4n"/>`,
		"fallback": "ion:newspaper",
	});
}

export default Component;
