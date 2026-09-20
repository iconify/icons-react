import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-usqibey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-usqibey"/>`,
		"fallback": "mdi:printer-3d-nozzle-off",
	});
}

export default Component;
