import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx8-v0blk.css';
import '../../css/a/amiveibiz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bx8-v0blk"/><path clip-rule="evenodd" class="amiveibiz"/>`,
		"fallback": "qlementine-icons:run-16",
	});
}

export default Component;
