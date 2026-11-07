import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw6cz2bya.css';
import '../../css/g/gussmibdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hw6cz2bya"/><path class="gussmibdl"/>`,
		"fallback": "solar:pie-chart-bold-duotone",
	});
}

export default Component;
