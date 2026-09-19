import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzfdp0cri.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzfdp0cri"/>`,
		"fallback": "fa7-brands:skype",
	});
}

export default Component;
