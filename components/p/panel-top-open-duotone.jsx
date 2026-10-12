import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/b/b_4ql7bko.css';
import '../../css/w/wgh0es_6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1a2eew1e"/><path class="b_4ql7bko"/><path class="wgh0es_6s"/></g>`,
		"fallback": "lucide-extended:panel-top-open-duotone",
	});
}

export default Component;
