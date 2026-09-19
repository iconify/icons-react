import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-0h0cb7y.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-0h0cb7y"/>`,
		"fallback": "whh:securityalt",
	});
}

export default Component;
