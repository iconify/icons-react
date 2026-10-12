import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pthc7kbbw.css';
import '../../css/i/ig-kolbmk.css';
import '../../css/p/plk3fn3le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pthc7kbbw"/><path class="ig-kolbmk"/><path class="plk3fn3le"/></g>`,
		"fallback": "lucide-extended:user-round-duotone",
	});
}

export default Component;
