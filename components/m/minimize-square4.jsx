import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x91eaib1w.css';
import '../../css/k/kuka9vbtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x91eaib1w"/><path clip-rule="evenodd" class="kuka9vbtd"/></g>`,
		"fallback": "reicon:minimize-square4",
	});
}

export default Component;
