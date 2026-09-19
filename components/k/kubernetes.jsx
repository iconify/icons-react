import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi4d1ebgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yi4d1ebgc"/>`,
		"fallback": "file-icons:kubernetes",
	});
}

export default Component;
