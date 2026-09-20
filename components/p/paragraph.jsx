import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9600rbon.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9600rbon"/>`,
		"fallback": "subway:paragraph",
	});
}

export default Component;
