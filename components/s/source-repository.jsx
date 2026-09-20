import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3_a_hwsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3_a_hwsj"/>`,
		"fallback": "mdi:source-repository",
	});
}

export default Component;
