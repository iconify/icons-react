import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6_cvul6v.css';
import '../../css/b/bo2v11vwg.css';
import '../../css/n/n7haok96c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6_cvul6v"/><path class="bo2v11vwg"/><path class="n7haok96c"/>`,
		"fallback": "fxemoji:meatonbone",
	});
}

export default Component;
