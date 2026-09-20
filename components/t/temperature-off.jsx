import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3ec26bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3ec26bdj"/>`,
		"fallback": "tabler:temperature-off",
	});
}

export default Component;
