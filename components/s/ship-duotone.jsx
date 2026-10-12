import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7w3l1b0r.css';
import '../../css/i/iotgnquzk.css';
import '../../css/p/p0v030bro.css';
import '../../css/o/o82blrbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n7w3l1b0r"/><path class="iotgnquzk"/><path class="p0v030bro"/><path class="o82blrbht"/></g>`,
		"fallback": "lucide-extended:ship-duotone",
	});
}

export default Component;
