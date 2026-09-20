import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw55usblm.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw55usblm"/>`,
		"fallback": "memory:radiobox",
	});
}

export default Component;
