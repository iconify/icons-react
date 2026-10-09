import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4x0tctpq.css';
import '../../css/g/gmws-ab3f.css';
import '../../css/v/vviu6n41p.css';
import '../../css/v/vmzdg8b4a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4x0tctpq"/><path class="gmws-ab3f"/><path class="vviu6n41p"/><path class="vmzdg8b4a"/>`,
		"fallback": "energy-icons:qr-code-48",
	});
}

export default Component;
