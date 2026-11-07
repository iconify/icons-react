import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdj9eybmg.css';
import '../../css/t/tgxkbbc5w.css';
import '../../css/p/p6a18oboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdj9eybmg"/><path class="tgxkbbc5w"/><path clip-rule="evenodd" class="p6a18oboc"/>`,
		"fallback": "solar:skateboard-bold-duotone",
	});
}

export default Component;
