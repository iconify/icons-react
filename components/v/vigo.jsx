import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsel27bbh.css';
import '../../css/x/xqhescv-e.css';
import '../../css/i/im33libln.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rsel27bbh"><path class="xqhescv-e"/><path class="im33libln"/></g>`,
		"fallback": "icon-park:vigo",
	});
}

export default Component;
