import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjq2w1_ae.css';
import '../../css/s/s53by5bzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjq2w1_ae"/><path clip-rule="evenodd" class="s53by5bzh"/>`,
		"fallback": "solar:map-point-wave-bold-duotone",
	});
}

export default Component;
