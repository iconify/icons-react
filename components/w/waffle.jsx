import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eunmtixue.css';
import '../../css/g/gk_-emhjw.css';
import '../../css/b/b3q787b0f.css';
import '../../css/y/ydxqe_b6b.css';
import '../../css/s/sidw-zgtc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eunmtixue"/><path class="gk_-emhjw"/><path class="b3q787b0f"/><path class="ydxqe_b6b"/><path class="sidw-zgtc"/></g>`,
		"fallback": "fluent-emoji-flat:waffle",
	});
}

export default Component;
