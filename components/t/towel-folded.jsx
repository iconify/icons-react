import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e0xwmacwp.css';
import '../../css/g/gkvuaqi4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e0xwmacwp"/><path class="gkvuaqi4v"/></g>`,
		"fallback": "lucide-lab:towel-folded",
	});
}

export default Component;
