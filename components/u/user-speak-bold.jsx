import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1j9jhban.css';
import '../../css/f/f75dcf04p.css';
import '../../css/b/bxv6k7bpa.css';
import '../../css/c/c8mwtbcpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1j9jhban"/><path class="f75dcf04p"/><path class="bxv6k7bpa"/><path class="c8mwtbcpp"/>`,
		"fallback": "solar:user-speak-bold",
	});
}

export default Component;
