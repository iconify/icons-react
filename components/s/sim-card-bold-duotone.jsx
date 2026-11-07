import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-vry1bva.css';
import '../../css/z/za4fsnh-m.css';
import '../../css/m/m10r4ya4l.css';
import '../../css/y/y1djb4dsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-vry1bva"/><path class="za4fsnh-m"/><path class="m10r4ya4l"/><path class="y1djb4dsb"/>`,
		"fallback": "solar:sim-card-bold-duotone",
	});
}

export default Component;
