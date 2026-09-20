import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/df2l3brnp.css';
import '../../css/o/om-d6xjfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="df2l3brnp"/><rect class="om-d6xjfx"/></g>`,
		"fallback": "lucide:monitor-smartphone",
	});
}

export default Component;
