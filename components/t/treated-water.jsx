import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1qlq559v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c1qlq559v"/>`,
		"fallback": "healthicons:treated-water",
	});
}

export default Component;
