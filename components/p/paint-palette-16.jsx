import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idcnk1b5s.css';
import '../../css/x/xqadazbcn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idcnk1b5s"/><path clip-rule="evenodd" class="xqadazbcn"/>`,
		"fallback": "qlementine-icons:paint-palette-16",
	});
}

export default Component;
