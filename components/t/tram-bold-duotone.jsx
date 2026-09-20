import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/beg234f0r.css';
import '../../css/f/ft9k9-bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="beg234f0r"/><path class="ft9k9-bpw"/></g>`,
		"fallback": "solar:tram-bold-duotone",
	});
}

export default Component;
