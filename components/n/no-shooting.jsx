import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/g-jwhsbbd.css';
import '../../css/m/mbe_9obgv.css';
import '../../css/i/igso98b1i.css';
import '../../css/h/hwdijdbgq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="g-jwhsbbd"/><path class="mbe_9obgv"/><path class="igso98b1i"/><circle class="hwdijdbgq"/></g>`,
		"fallback": "icon-park:no-shooting",
	});
}

export default Component;
