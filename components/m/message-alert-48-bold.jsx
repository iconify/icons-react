import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8s-z80le.css';
import '../../css/l/l2ijsqbrv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8s-z80le"/><path class="l2ijsqbrv"/>`,
		"fallback": "energy-icons:message-alert-48-bold",
	});
}

export default Component;
