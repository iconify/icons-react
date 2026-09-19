import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd-no5pjn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd-no5pjn"/>`,
		"fallback": "fa7-brands:odnoklassniki",
	});
}

export default Component;
