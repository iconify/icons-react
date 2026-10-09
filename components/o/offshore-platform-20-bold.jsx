import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1d2hbbbl.css';
import '../../css/t/to__--22z.css';
import '../../css/l/lzwt4-b9i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1d2hbbbl"/><path class="to__--22z"/><path class="lzwt4-b9i"/>`,
		"fallback": "energy-icons:offshore-platform-20-bold",
	});
}

export default Component;
