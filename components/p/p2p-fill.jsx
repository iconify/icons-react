import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovxvs_b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovxvs_b7y"/>`,
		"fallback": "ri:p2p-fill",
	});
}

export default Component;
