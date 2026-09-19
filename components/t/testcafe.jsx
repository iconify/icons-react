import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8cnyjb5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8cnyjb5v"/>`,
		"fallback": "file-icons:testcafe",
	});
}

export default Component;
