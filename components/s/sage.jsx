import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8_ggj7jf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8_ggj7jf"/>`,
		"fallback": "file-icons:sage",
	});
}

export default Component;
