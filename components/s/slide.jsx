import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/il841_eem.css';
import '../../css/o/o-om9db6c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="il841_eem"/><path class="o-om9db6c"/></g>`,
		"fallback": "icon-park-outline:slide",
	});
}

export default Component;
