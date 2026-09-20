import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5citje1o.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5citje1o"/>`,
		"fallback": "memory:radiobox-marked",
	});
}

export default Component;
