import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hkvsefk9y.css';
import '../../css/z/zukqsf5ef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hkvsefk9y"/><path class="zukqsf5ef"/></g>`,
		"fallback": "reicon:tuning4",
	});
}

export default Component;
