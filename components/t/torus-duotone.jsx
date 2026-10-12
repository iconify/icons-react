import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h70jplbos.css';
import '../../css/r/rpzhmhbyx.css';
import '../../css/q/qul_7homc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h70jplbos"/><path class="rpzhmhbyx"/><path class="qul_7homc"/></g>`,
		"fallback": "lucide-extended:torus-duotone",
	});
}

export default Component;
