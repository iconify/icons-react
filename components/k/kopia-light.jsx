import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9daaw4ne.css';

const viewBox = {"width":100,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9daaw4ne"/>`,
		"fallback": "thesvg-color:kopia-light",
	});
}

export default Component;
