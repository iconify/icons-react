import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3p4isbef.css';
import '../../css/z/z7e6scc8w.css';
import '../../css/o/odnpcwamu.css';
import '../../css/l/leo-7zbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n3p4isbef"/><path class="z7e6scc8w"/><path class="odnpcwamu"/><path class="leo-7zbiu"/></g>`,
		"fallback": "andrsrxn:soil-moisture-global",
	});
}

export default Component;
