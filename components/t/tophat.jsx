import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejftj-b1w.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejftj-b1w"/>`,
		"fallback": "whh:tophat",
	});
}

export default Component;
