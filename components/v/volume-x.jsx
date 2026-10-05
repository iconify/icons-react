import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/aw0x24p7w.css';
import '../../css/f/fdnofebjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="aw0x24p7w"/><path class="fdnofebjn"/></g>`,
		"fallback": "matita:volume-x",
	});
}

export default Component;
