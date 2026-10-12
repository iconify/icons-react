import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_k8itbaf.css';
import '../../css/h/hbhcawbze.css';
import '../../css/i/i4oj8jbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z_k8itbaf"/><path class="hbhcawbze"/><path class="i4oj8jbzv"/></g>`,
		"fallback": "lucide-extended:volume-x-duotone",
	});
}

export default Component;
