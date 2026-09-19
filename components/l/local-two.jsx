import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/y/yzgcxqb4r.css';
import '../../css/v/v57r1kbjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="yzgcxqb4r"/><path class="v57r1kbjg"/></g>`,
		"fallback": "icon-park-outline:local-two",
	});
}

export default Component;
