import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/j/jgyhwabuj.css';
import '../../css/g/ga8sbbcvy.css';
import '../../css/j/jyxq1sbkh.css';
import '../../css/u/uro8bvlfh.css';
import '../../css/g/gf6hfkbax.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="jgyhwabuj"/><path clip-rule="evenodd" class="ga8sbbcvy"/></g><path clip-rule="evenodd" class="jyxq1sbkh"/><path clip-rule="evenodd" class="uro8bvlfh"/><path clip-rule="evenodd" class="gf6hfkbax"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:stopwatch-off",
	});
}

export default Component;
