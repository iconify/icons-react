import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oom210bsn.css';
import '../../css/m/m9kbinsgl.css';
import '../../css/y/yvmgt3rgc.css';
import '../../css/c/c148ybb0y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oom210bsn"/><path class="m9kbinsgl"/><path class="yvmgt3rgc"/><path class="c148ybb0y"/></g>`,
		"fallback": "glyphs:lips-outline",
	});
}

export default Component;
