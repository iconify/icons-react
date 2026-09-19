import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-keh5bfs.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-keh5bfs"/>`,
		"fallback": "fa-solid:share-alt",
	});
}

export default Component;
