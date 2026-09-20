import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y29dp-xoh.css';
import '../../css/n/n_blzqpck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y29dp-xoh"/><path class="n_blzqpck"/>`,
		"fallback": "solar:plaaylist-minimalistic-bold",
	});
}

export default Component;
