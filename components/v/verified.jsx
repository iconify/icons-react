import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qezsv0n_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qezsv0n_t"/>`,
		"fallback": "humbleicons:verified",
	});
}

export default Component;
