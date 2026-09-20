import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjm_2bbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjm_2bbjz"/>`,
		"fallback": "keyline-icons:wallet-cards",
	});
}

export default Component;
