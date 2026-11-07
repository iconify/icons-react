import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/z/zws4je9-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path class="zws4je9-p"/>`,
		"fallback": "solar:square-alt-arrow-down-bold-duotone",
	});
}

export default Component;
