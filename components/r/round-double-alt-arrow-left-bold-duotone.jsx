import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt4erfbgl.css';
import '../../css/o/o8houvrgo.css';
import '../../css/m/mijy_4gbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt4erfbgl"/><path class="o8houvrgo"/><path class="mijy_4gbi"/>`,
		"fallback": "solar:round-double-alt-arrow-left-bold-duotone",
	});
}

export default Component;
