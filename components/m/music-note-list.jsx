import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aceaotb-f.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aceaotb-f"/>`,
		"fallback": "f7:music-note-list",
	});
}

export default Component;
