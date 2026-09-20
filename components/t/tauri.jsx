import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-2i06puf.css';
import '../../css/i/i0l09vzyb.css';
import '../../css/n/n_n679b9r.css';
import '../../css/j/jslk2fb-q.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-2i06puf"/><path class="i0l09vzyb"/><path clip-rule="evenodd" class="n_n679b9r"/><path clip-rule="evenodd" class="jslk2fb-q"/>`,
		"fallback": "material-icon-theme:tauri",
	});
}

export default Component;
