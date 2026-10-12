import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b3atnhbfs.css';
import '../../css/s/skp8tjssj.css';
import '../../css/g/gq94behxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b3atnhbfs"/><path class="skp8tjssj"/><path class="gq94behxg"/></g>`,
		"fallback": "lucide-extended:user-key-duotone",
	});
}

export default Component;
