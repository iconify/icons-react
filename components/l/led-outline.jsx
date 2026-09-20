import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqr_ufb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqr_ufb5f"/>`,
		"fallback": "mdi:led-outline",
	});
}

export default Component;
