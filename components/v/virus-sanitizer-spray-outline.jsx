import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oiz0jrbek.css';
import '../../css/b/b2evgybnf.css';
import '../../css/u/uxcp4yfkp.css';
import '../../css/z/z23feqc8q.css';
import '../../css/q/qmzhmtbqy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oiz0jrbek"/><path class="b2evgybnf"/><path class="uxcp4yfkp"/><path clip-rule="evenodd" class="z23feqc8q"/><path class="qmzhmtbqy"/></g>`,
		"fallback": "healthicons:virus-sanitizer-spray-outline",
	});
}

export default Component;
