import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgumn-shq.css';
import '../../css/o/oog-0gn8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tgumn-shq"/><path class="oog-0gn8r"/></g>`,
		"fallback": "lucide-extended:stretch-vertical-duotone",
	});
}

export default Component;
