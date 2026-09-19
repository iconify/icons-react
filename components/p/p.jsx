import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b07q8bceg.css';

const viewBox = {"width":563,"height":867};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b07q8bceg"/>`,
		"fallback": "ls:p",
	});
}

export default Component;
