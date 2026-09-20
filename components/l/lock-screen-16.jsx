import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8snzujqw.css';
import '../../css/r/roq1fmb9v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f8snzujqw"/><path clip-rule="evenodd" class="roq1fmb9v"/>`,
		"fallback": "qlementine-icons:lock-screen-16",
	});
}

export default Component;
