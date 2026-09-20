import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pus5ae97y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pus5ae97y"/>`,
		"fallback": "mdi:rhombus-split",
	});
}

export default Component;
