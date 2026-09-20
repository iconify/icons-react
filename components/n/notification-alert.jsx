import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/w/wi6j9dbfk.css';
import '../../css/v/vzvvnn72g.css';
import '../../css/d/dkr-ktbwc.css';
import '../../css/s/ss9xfthse.css';
import '../../css/y/ygynpqima.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="wi6j9dbfk"/><path class="vzvvnn72g"/><path class="dkr-ktbwc"/><path class="ss9xfthse"/><path class="ygynpqima"/></g>`,
		"fallback": "streamline-plump:notification-alert",
	});
}

export default Component;
