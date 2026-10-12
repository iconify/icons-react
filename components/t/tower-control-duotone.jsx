import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/md4b9vqfg.css';
import '../../css/y/yci4-xbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="md4b9vqfg"/><path class="yci4-xbdz"/></g>`,
		"fallback": "lucide-extended:tower-control-duotone",
	});
}

export default Component;
