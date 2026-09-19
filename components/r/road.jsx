import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc5fb6b1r.css';
import '../../css/l/lix3kwe4f.css';
import '../../css/m/mmrx08g_l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc5fb6b1r"/><path class="lix3kwe4f"/><path class="mmrx08g_l"/>`,
		"fallback": "carbon:road",
	});
}

export default Component;
