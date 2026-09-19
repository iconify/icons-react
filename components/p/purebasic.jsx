import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svv1otbgs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svv1otbgs"/>`,
		"fallback": "file-icons:purebasic",
	});
}

export default Component;
