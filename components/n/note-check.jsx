import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvv9qhw4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvv9qhw4a"/>`,
		"fallback": "mdi:note-check",
	});
}

export default Component;
