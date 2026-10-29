import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvy3fkxog.css';
import '../../css/s/svvhpabms.css';
import '../../css/e/ewyunfb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qvy3fkxog"/><path class="svvhpabms wm-a"/><path class="ewyunfb7m wm-s"/></g>`,
		"fallback": "withicons:shower-head-solid",
	});
}

export default Component;
