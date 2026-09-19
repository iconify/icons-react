import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5940d3ll.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5940d3ll"/>`,
		"fallback": "f7:pencil-ellipsis-rectangle",
	});
}

export default Component;
