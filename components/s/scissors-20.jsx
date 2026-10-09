import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0--pbdfi.css';
import '../../css/z/zxgl3h68t.css';
import '../../css/w/wo93-6h9p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0--pbdfi"/><path class="zxgl3h68t"/><path class="wo93-6h9p"/>`,
		"fallback": "energy-icons:scissors-20",
	});
}

export default Component;
