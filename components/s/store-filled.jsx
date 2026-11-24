import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxigcqtgr.css';
import '../../css/r/r2mnmqlht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxigcqtgr"/><path class="r2mnmqlht"/>`,
		"fallback": "lucide-extended:store-filled",
	});
}

export default Component;
