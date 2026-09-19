import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlu9gyjbu.css';
import '../../css/t/t54ht8bfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlu9gyjbu"/><path class="t54ht8bfl"/>`,
		"fallback": "cuida:single-select-outline",
	});
}

export default Component;
