import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/q9fiilb4b.css';
import '../../css/m/mr73zignz.css';
import '../../css/q/qq4r1_reu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="q9fiilb4b"/><path class="mr73zignz"/><path class="qq4r1_reu"/></g>`,
		"fallback": "icon-park-outline:mail-package",
	});
}

export default Component;
