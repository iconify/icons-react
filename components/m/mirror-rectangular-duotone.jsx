import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v28la4rjs.css';
import '../../css/o/ok0_38pkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v28la4rjs"/><path class="ok0_38pkn"/></g>`,
		"fallback": "lucide-extended:mirror-rectangular-duotone",
	});
}

export default Component;
