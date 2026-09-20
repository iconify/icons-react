import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5yb73bwk.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5yb73bwk"/>`,
		"fallback": "wpf:renewsubscription",
	});
}

export default Component;
