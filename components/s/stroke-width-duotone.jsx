import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qzg-lj6jl.css';
import '../../css/x/xhatntbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qzg-lj6jl"/><path class="xhatntbcu"/></g>`,
		"fallback": "lucide-extended:stroke-width-duotone",
	});
}

export default Component;
