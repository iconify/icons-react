import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqb087b1j.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqb087b1j"/>`,
		"fallback": "memory:minus-box",
	});
}

export default Component;
