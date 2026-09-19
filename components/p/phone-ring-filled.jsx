import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5rchq8iq.css';
import '../../css/j/j5gksabhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5rchq8iq"/><path class="j5gksabhs"/>`,
		"fallback": "boxicons:phone-ring-filled",
	});
}

export default Component;
