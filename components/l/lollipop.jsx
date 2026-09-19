import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xrrm97add.css';
import '../../css/q/qnqkujejg.css';
import '../../css/m/mqepsgbiz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xrrm97add"/><path class="qnqkujejg"/><path class="mqepsgbiz"/></g>`,
		"fallback": "icon-park:lollipop",
	});
}

export default Component;
