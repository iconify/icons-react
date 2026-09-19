import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbb0aac8o.css';
import '../../css/b/b2suoikth.css';
import '../../css/j/jxdwdmb3k.css';
import '../../css/d/dkin9ricg.css';
import '../../css/o/oz5i6ohli.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wbb0aac8o"/><path class="b2suoikth"/><path class="jxdwdmb3k"/><path class="dkin9ricg"/><path class="oz5i6ohli"/></g>`,
		"fallback": "fluent-emoji-flat:statue-of-liberty",
	});
}

export default Component;
