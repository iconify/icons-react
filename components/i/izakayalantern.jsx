import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jezndibaa.css';
import '../../css/b/bx73xdbxr.css';
import '../../css/j/jzyh32b9m.css';
import '../../css/d/d-8a58b0f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jezndibaa"/><path class="bx73xdbxr"/><path class="jzyh32b9m"/><path class="d-8a58b0f"/>`,
		"fallback": "fxemoji:izakayalantern",
	});
}

export default Component;
