import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1o8tcbsv.css';
import '../../css/g/g2tih8iko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n1o8tcbsv"/><path class="g2tih8iko"/></g>`,
		"fallback": "lucide-extended:triangles-centerline-dashed-horizontal-duotone",
	});
}

export default Component;
