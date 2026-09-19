import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmc-p6bhg.css';
import '../../css/t/tjqy8lb7t.css';
import '../../css/d/dfdn618zu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmc-p6bhg"/><path class="tjqy8lb7t"/><path class="dfdn618zu"/>`,
		"fallback": "fxemoji:rose",
	});
}

export default Component;
