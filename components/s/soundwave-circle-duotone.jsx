import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjswvlb7j.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/zk89pre7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGuKBfghHD" class="qjswvlb7j"/></defs><g class="cuyn6tgcc"><g class="mc2zb0bvp"><path clip-rule="evenodd" class="zk89pre7d"/><use href="#SVGuKBfghHD"/></g><use href="#SVGuKBfghHD"/></g>`,
		"fallback": "reicon:soundwave-circle-duotone",
	});
}

export default Component;
