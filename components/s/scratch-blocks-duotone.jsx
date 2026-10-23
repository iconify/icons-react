import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gd7hbkjce.css';
import '../../css/o/opisurbex.css';
import '../../css/z/z1gzixbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gd7hbkjce"/><path class="opisurbex"/><path class="z1gzixbrz"/></g>`,
		"fallback": "lucide-extended:scratch-blocks-duotone",
	});
}

export default Component;
