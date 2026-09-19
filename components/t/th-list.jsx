import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nusvfu97p.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nusvfu97p"/>`,
		"fallback": "fa:th-list",
	});
}

export default Component;
