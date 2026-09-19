import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sd99jr24q.css';
import '../../css/n/n1f1wybsn.css';
import '../../css/s/slqajwrnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sd99jr24q"/><path clip-rule="evenodd" class="n1f1wybsn"/><path class="slqajwrnj"/></g>`,
		"fallback": "healthicons:thermometer-digital-24px",
	});
}

export default Component;
