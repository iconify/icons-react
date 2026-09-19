import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jym9c9k8y.css';
import '../../css/s/sfsz-pbjn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="jym9c9k8y"/><path class="sfsz-pbjn"/></g>`,
		"fallback": "icon-park:left-expand",
	});
}

export default Component;
