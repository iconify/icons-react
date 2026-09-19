import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc2bejsmf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc2bejsmf"/>`,
		"fallback": "fa7-brands:internet-archive",
	});
}

export default Component;
