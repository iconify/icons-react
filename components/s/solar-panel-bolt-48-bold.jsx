import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcny63jha.css';
import '../../css/o/ocydsvu6l.css';
import '../../css/x/xm577jbwp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcny63jha"/><path class="ocydsvu6l"/><path class="xm577jbwp"/>`,
		"fallback": "energy-icons:solar-panel-bolt-48-bold",
	});
}

export default Component;
