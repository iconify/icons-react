import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzrx_c-7b.css';
import '../../css/y/yydnv8u2g.css';
import '../../css/j/jib9akb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jzrx_c-7b"/><path class="yydnv8u2g"/><path clip-rule="evenodd" class="jib9akb-i"/>`,
		"fallback": "lucide-extended:server-plus-filled",
	});
}

export default Component;
