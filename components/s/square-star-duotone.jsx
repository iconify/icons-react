import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0fqg75xv.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/f/fz4n4bcix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h0fqg75xv"/><path class="s1a2eew1e"/><path clip-rule="evenodd" class="fz4n4bcix"/></g>`,
		"fallback": "lucide-extended:square-star-duotone",
	});
}

export default Component;
