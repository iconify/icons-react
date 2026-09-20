import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9g2sprop.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9g2sprop"/>`,
		"fallback": "memory:wall-front",
	});
}

export default Component;
