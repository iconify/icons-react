import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/udflrpb0o.css';
import '../../css/w/w121wcbkc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="udflrpb0o"/><path class="w121wcbkc"/></g>`,
		"fallback": "icon-park-outline:text-underline",
	});
}

export default Component;
