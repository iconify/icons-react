import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb64r8bnw.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb64r8bnw"/>`,
		"fallback": "whh:seo",
	});
}

export default Component;
