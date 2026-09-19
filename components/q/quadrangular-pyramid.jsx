import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jfck2nb2s.css';
import '../../css/c/cnmqsablm.css';
import '../../css/w/wfv_uybvy.css';
import '../../css/m/mlp-s3bma.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="jfck2nb2s"/><path class="cnmqsablm"/><path class="wfv_uybvy"/><path class="mlp-s3bma"/></g>`,
		"fallback": "icon-park:quadrangular-pyramid",
	});
}

export default Component;
