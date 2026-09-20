import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/ek2q-vb-f.css';
import '../../css/m/mj9ltfbcd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ek2q-vb-f"/><path class="mj9ltfbcd"/></g>`,
		"fallback": "streamline-plump:password-lock",
	});
}

export default Component;
