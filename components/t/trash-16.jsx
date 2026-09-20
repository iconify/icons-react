import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le5en1tee.css';
import '../../css/e/el2152b6s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le5en1tee"/><path clip-rule="evenodd" class="el2152b6s"/>`,
		"fallback": "qlementine-icons:trash-16",
	});
}

export default Component;
