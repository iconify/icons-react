import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6aazewdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6aazewdt"/>`,
		"fallback": "boxicons:petrol-pump",
	});
}

export default Component;
