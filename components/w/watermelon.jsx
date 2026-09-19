import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu-nlsb1q.css';
import '../../css/x/xgayqouzf.css';
import '../../css/a/amj8xrx6f.css';
import '../../css/e/e8hrcooaj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu-nlsb1q"/><path class="xgayqouzf"/><path class="amj8xrx6f"/><path class="e8hrcooaj"/>`,
		"fallback": "fxemoji:watermelon",
	});
}

export default Component;
