import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yssc87bli.css';
import '../../css/u/uxtf7gb4w.css';
import '../../css/u/uogpfrorl.css';
import '../../css/c/cizw5-z8h.css';
import '../../css/c/cew7afbxa.css';
import '../../css/p/p4rnwphiw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yssc87bli"/><path class="uxtf7gb4w"/><path class="uogpfrorl"/><path class="cizw5-z8h"/><path class="cew7afbxa"/><path class="p4rnwphiw"/></g>`,
		"fallback": "fluent-emoji-flat:kimono",
	});
}

export default Component;
