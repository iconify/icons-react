import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwi0jacox.css';
import '../../css/a/a5aa--b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xwi0jacox"/><path class="a5aa--b9r"/></g>`,
		"fallback": "lucide-extended:tv-duotone",
	});
}

export default Component;
