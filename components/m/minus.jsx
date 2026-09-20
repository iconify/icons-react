import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgczhzh7l.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgczhzh7l"/>`,
		"fallback": "memory:minus",
	});
}

export default Component;
