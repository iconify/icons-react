import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wa2z_5bym.css';
import '../../css/f/fp5sac7rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wa2z_5bym"/><path class="fp5sac7rq"/></g>`,
		"fallback": "hugeicons:task-02",
	});
}

export default Component;
