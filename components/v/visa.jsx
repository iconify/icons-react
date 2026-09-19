import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak21erbzw.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak21erbzw"/>`,
		"fallback": "whh:visa",
	});
}

export default Component;
