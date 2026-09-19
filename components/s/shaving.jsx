import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g66itybsn.css';
import '../../css/x/xxtwnf1jn.css';
import '../../css/v/v-bri2r9g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="g66itybsn"/><rect class="xxtwnf1jn"/><path class="v-bri2r9g"/></g>`,
		"fallback": "icon-park:shaving",
	});
}

export default Component;
