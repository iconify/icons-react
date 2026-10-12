import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/datywxy9g.css';
import '../../css/w/w9w52560n.css';
import '../../css/b/b0igw0mrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="datywxy9g"/><path class="w9w52560n"/><path class="b0igw0mrg"/></g>`,
		"fallback": "lucide-extended:projector-duotone",
	});
}

export default Component;
