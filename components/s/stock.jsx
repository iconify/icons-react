import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/vaernzbtx.css';
import '../../css/s/so6y00bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="vaernzbtx"/><path class="so6y00bvk"/></g>`,
		"fallback": "streamline-sharp-color:stock",
	});
}

export default Component;
