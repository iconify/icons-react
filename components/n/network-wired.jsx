import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iakv479-q.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iakv479-q"/>`,
		"fallback": "fa-solid:network-wired",
	});
}

export default Component;
