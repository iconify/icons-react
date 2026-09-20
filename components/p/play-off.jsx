import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/o/oglteutrp.css';
import '../../css/u/ujcfkoxsn.css';
import '../../css/e/ev57m9bzj.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="oglteutrp"/><path clip-rule="evenodd" class="ujcfkoxsn"/></g><path clip-rule="evenodd" class="ev57m9bzj"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:play-off",
	});
}

export default Component;
