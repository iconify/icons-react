import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/ge01ofbis.css';
import '../../css/e/e4ofavxww.css';
import '../../css/y/ywl9iuron.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ge01ofbis"/><path class="e4ofavxww"/><path class="ywl9iuron"/></g>`,
		"fallback": "icon-park:new-afferent",
	});
}

export default Component;
