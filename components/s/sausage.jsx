import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb4g91bhl.css';
import '../../css/z/z2z_iactg.css';
import '../../css/d/df5r14bpg.css';
import '../../css/y/y4mtfplia.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb4g91bhl"/><path class="z2z_iactg"/><path class="df5r14bpg"/><path class="y4mtfplia"/>`,
		"fallback": "iconito:sausage",
	});
}

export default Component;
