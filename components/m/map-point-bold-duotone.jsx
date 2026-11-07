import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohfan4oud.css';
import '../../css/b/b-_nic0_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohfan4oud"/><path class="b-_nic0_j"/>`,
		"fallback": "solar:map-point-bold-duotone",
	});
}

export default Component;
