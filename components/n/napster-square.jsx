import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/or8qiobhz.css';
import '../../css/v/vwh2r0r7q.css';
import '../../css/v/v25gzjbrl.css';
import '../../css/p/pltokbbut.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="or8qiobhz"/><path class="vwh2r0r7q"/><path class="v25gzjbrl"/><path class="pltokbbut"/></g>`,
		"fallback": "jam:napster-square",
	});
}

export default Component;
