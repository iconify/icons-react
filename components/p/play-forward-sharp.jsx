import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyp08bp7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyp08bp7l"/>`,
		"fallback": "famicons:play-forward-sharp",
	});
}

export default Component;
