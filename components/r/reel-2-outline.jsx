import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pzhz2ib_o.css';
import '../../css/a/ayfjkbc7k.css';
import '../../css/w/wn5w14b5n.css';
import '../../css/t/tby9oe12w.css';
import '../../css/z/zcmukr9rg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pzhz2ib_o"/><path class="ayfjkbc7k"/><path class="wn5w14b5n"/><path class="tby9oe12w"/><path class="zcmukr9rg"/></g>`,
		"fallback": "solar:reel-2-outline",
	});
}

export default Component;
