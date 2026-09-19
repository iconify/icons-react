import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zivjivt6f.css';
import '../../css/r/re6ma7b3p.css';
import '../../css/w/w6_07y1mz.css';
import '../../css/j/jofy-6bvj.css';
import '../../css/t/tbfjszvql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zivjivt6f"/><path class="re6ma7b3p"/><circle class="w6_07y1mz"/><circle class="jofy-6bvj"/><circle class="tbfjszvql"/></g>`,
		"fallback": "icon-park-outline:tickets-two",
	});
}

export default Component;
