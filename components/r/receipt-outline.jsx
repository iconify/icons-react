import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag2418r2o.css';
import '../../css/x/xw-233z3g.css';
import '../../css/l/len3wybrl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag2418r2o"/><path class="xw-233z3g"/><path class="len3wybrl"/>`,
		"fallback": "ion:receipt-outline",
	});
}

export default Component;
