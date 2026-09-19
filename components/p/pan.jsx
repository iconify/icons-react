import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5nod8qop.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5nod8qop"/>`,
		"fallback": "file-icons:pan",
	});
}

export default Component;
