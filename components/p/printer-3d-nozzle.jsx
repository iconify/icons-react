import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mng4_v46u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mng4_v46u"/>`,
		"fallback": "mdi:printer-3d-nozzle",
	});
}

export default Component;
