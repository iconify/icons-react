import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zjpas3biq.css';
import '../../css/w/w738syxaa.css';
import '../../css/l/les279bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zjpas3biq"/><path class="w738syxaa"/><path class="les279bft"/></g>`,
		"fallback": "hugeicons:spaghetti",
	});
}

export default Component;
