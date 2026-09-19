import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/ge01ofbis.css';
import '../../css/g/gq20dsh4f.css';
import '../../css/y/ywl9iuron.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ge01ofbis"/><path class="gq20dsh4f"/><path class="ywl9iuron"/></g>`,
		"fallback": "icon-park:new-efferent",
	});
}

export default Component;
