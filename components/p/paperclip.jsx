import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3muvh5zk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3muvh5zk"/>`,
		"fallback": "dashicons:paperclip",
	});
}

export default Component;
