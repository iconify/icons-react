import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thukg2blq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thukg2blq"/>`,
		"fallback": "tabler:temperature-plus-filled",
	});
}

export default Component;
