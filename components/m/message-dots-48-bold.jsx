import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8s-z80le.css';
import '../../css/p/pkm70y_4f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8s-z80le"/><path class="pkm70y_4f"/>`,
		"fallback": "energy-icons:message-dots-48-bold",
	});
}

export default Component;
