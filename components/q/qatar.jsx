import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu52i9kgw.css';
import '../../css/x/x4jxcf4cm.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu52i9kgw"/><path class="x4jxcf4cm"/>`,
		"fallback": "tabler-flags:qatar",
	});
}

export default Component;
