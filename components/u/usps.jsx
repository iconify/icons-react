import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/um-dnup2r.css';
import '../../css/e/e-8ncuhex.css';
import '../../css/x/xcpyko0hf.css';
import '../../css/k/kqff81_xc.css';

const viewBox = {"width":76.3,"height":47.2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="um-dnup2r"/><path class="e-8ncuhex"/><path class="xcpyko0hf"/><path class="kqff81_xc"/></g>`,
		"fallback": "thesvg:usps",
	});
}

export default Component;
