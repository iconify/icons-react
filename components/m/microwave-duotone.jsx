import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lp9fgvh8r.css';
import '../../css/s/s3fhr-boy.css';
import '../../css/n/numid2z_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lp9fgvh8r"/><path class="s3fhr-boy"/><path class="numid2z_n"/></g>`,
		"fallback": "lucide-extended:microwave-duotone",
	});
}

export default Component;
