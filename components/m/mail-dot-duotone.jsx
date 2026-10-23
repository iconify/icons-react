import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oel4ofb7x.css';
import '../../css/s/shxonjffg.css';
import '../../css/o/ol-n2bb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oel4ofb7x"/><path class="shxonjffg"/><path class="ol-n2bb3o"/></g>`,
		"fallback": "lucide-extended:mail-dot-duotone",
	});
}

export default Component;
