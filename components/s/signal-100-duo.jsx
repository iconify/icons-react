import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k2zyqvp7q.css';
import '../../css/c/chf8sacno.css';
import '../../css/o/oir1tjbra.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k2zyqvp7q"/><path class="chf8sacno"/><path class="oir1tjbra"/></g>`,
		"fallback": "glyphs:signal-100-duo",
	});
}

export default Component;
