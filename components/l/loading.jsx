import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/v2606tbmv.css';
import '../../css/z/zk5qhlbwb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="v2606tbmv"/><path class="zk5qhlbwb"/></g>`,
		"fallback": "icon-park:loading",
	});
}

export default Component;
