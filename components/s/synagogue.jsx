import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zbegxlbom.css';
import '../../css/c/c5vo36b2v.css';
import '../../css/m/mbtpddbok.css';
import '../../css/k/kw88zxb8n.css';
import '../../css/z/zx0k85hea.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zbegxlbom"/><path class="c5vo36b2v"/><path class="mbtpddbok"/><path class="kw88zxb8n"/><path class="zx0k85hea"/></g>`,
		"fallback": "fluent-emoji-flat:synagogue",
	});
}

export default Component;
