import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f8nkb8g-f.css';
import '../../css/q/qyj6jnh_w.css';
import '../../css/n/nvj328b0o.css';
import '../../css/p/pwa5qqbfy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f8nkb8g-f"/><path class="qyj6jnh_w"/><path class="nvj328b0o"/><path class="pwa5qqbfy"/></g>`,
		"fallback": "glyphs:power-outline",
	});
}

export default Component;
