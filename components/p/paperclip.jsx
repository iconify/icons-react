import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x18z7kh9p.css';

const viewBox = {"width":961,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x18z7kh9p"/>`,
		"fallback": "whh:paperclip",
	});
}

export default Component;
