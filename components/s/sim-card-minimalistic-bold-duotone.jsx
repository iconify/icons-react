import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-vry1bva.css';
import '../../css/m/m-4cng7zq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-vry1bva"/><path class="m-4cng7zq"/>`,
		"fallback": "solar:sim-card-minimalistic-bold-duotone",
	});
}

export default Component;
