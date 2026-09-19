import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5n500bfw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5n500bfw"/>`,
		"fallback": "fa6-solid:share-nodes",
	});
}

export default Component;
