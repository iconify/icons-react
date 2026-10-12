import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-fwh23rz.css';
import '../../css/w/wxy7qktvt.css';
import '../../css/e/ekgo0ibnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l-fwh23rz"/><path class="wxy7qktvt"/><path class="ekgo0ibnj"/></g>`,
		"fallback": "lucide-extended:smartphone-charging-duotone",
	});
}

export default Component;
