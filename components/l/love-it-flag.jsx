import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8zo_n2sm.css';
import '../../css/a/aoz4tdbhh.css';
import '../../css/o/oz6qd1b4z.css';
import '../../css/n/nqf3_hgwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b8zo_n2sm"/><path class="aoz4tdbhh"/><path class="oz6qd1b4z"/><path class="nqf3_hgwg"/></g>`,
		"fallback": "streamline-ultimate-color:love-it-flag",
	});
}

export default Component;
