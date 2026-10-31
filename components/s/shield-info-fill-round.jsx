import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw3_31rij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw3_31rij"/>`,
		"fallback": "coolicons:shield-info-fill-round",
	});
}

export default Component;
