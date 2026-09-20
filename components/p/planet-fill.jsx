import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lycqc1r5r.css';
import '../../css/z/zphee1bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lycqc1r5r"/><path class="zphee1bbv"/>`,
		"fallback": "mingcute:planet-fill",
	});
}

export default Component;
