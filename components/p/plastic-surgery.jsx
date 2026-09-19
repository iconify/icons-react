import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abk0qyhqz.css';
import '../../css/q/qail9ubgm.css';
import '../../css/x/xgb3agl1o.css';
import '../../css/g/g77xy9s8n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="abk0qyhqz"><path class="qail9ubgm"/><path class="xgb3agl1o"/><path class="g77xy9s8n"/></g>`,
		"fallback": "icon-park:plastic-surgery",
	});
}

export default Component;
