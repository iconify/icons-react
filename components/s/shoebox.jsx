import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bey97dber.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bey97dber"/>`,
		"fallback": "whh:shoebox",
	});
}

export default Component;
