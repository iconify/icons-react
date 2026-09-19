import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8w70vxyo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8w70vxyo"/>`,
		"fallback": "fa7-solid:people-arrows",
	});
}

export default Component;
