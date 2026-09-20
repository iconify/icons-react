import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz9n6kbsv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kz9n6kbsv"/>`,
		"fallback": "streamline:tablet-capsule-solid",
	});
}

export default Component;
