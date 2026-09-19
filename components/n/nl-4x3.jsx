import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc3doybli.css';
import '../../css/v/v18c9fbau.css';
import '../../css/z/zzkm3r1nw.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc3doybli"/><path class="v18c9fbau"/><path class="zzkm3r1nw"/>`,
		"fallback": "flag:nl-4x3",
	});
}

export default Component;
