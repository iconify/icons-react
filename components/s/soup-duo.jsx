import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/plhvrsb6r.css';
import '../../css/g/g0jhk334h.css';
import '../../css/a/aedlnnets.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="plhvrsb6r"/><path class="g0jhk334h wm-a"/><path class="aedlnnets"/></g>`,
		"fallback": "withicons:soup-duo",
	});
}

export default Component;
