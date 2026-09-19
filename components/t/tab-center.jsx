import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuqar7t8o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuqar7t8o"/>`,
		"fallback": "fluent-mdl2:tab-center",
	});
}

export default Component;
