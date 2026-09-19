import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qzkhf9znl.css';
import '../../css/w/wbsd2bbfh.css';
import '../../css/j/j6pnv4mjo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="qzkhf9znl"/><path class="wbsd2bbfh"/><path class="j6pnv4mjo"/></g>`,
		"fallback": "icon-park:picture-one",
	});
}

export default Component;
