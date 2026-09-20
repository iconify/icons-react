import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pws9-9-po.css';
import '../../css/g/gw8i0w2vi.css';
import '../../css/m/mmltf__ll.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pws9-9-po"/><path clip-rule="evenodd" class="gw8i0w2vi"/><path class="mmltf__ll"/></g>`,
		"fallback": "streamline-plump-color:lightbulb-flat",
	});
}

export default Component;
