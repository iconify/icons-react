import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz_sk0b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz_sk0b6i"/>`,
		"fallback": "mdi:triangle-down",
	});
}

export default Component;
