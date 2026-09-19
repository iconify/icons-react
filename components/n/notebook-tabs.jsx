import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp685l3bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp685l3bw"/>`,
		"fallback": "hugeicons:notebook-tabs",
	});
}

export default Component;
