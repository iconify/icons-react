import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aezfh675b.css';
import '../../css/p/p7d-fccgv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aezfh675b"/><path class="p7d-fccgv"/>`,
		"fallback": "energy-icons:load-curve-20-bold",
	});
}

export default Component;
