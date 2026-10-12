import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afub65bxw.css';
import '../../css/k/kfsq47nik.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afub65bxw"/><path class="kfsq47nik"/>`,
		"fallback": "garden:terminal-window-stroke-20",
	});
}

export default Component;
