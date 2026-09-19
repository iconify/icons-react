import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hqkc3x_ls.css';
import '../../css/i/itekb-bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hqkc3x_ls"/><path class="itekb-bfs"/></g>`,
		"fallback": "hugeicons:sticky-note-01",
	});
}

export default Component;
