import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhm9gv9uy.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhm9gv9uy"/>`,
		"fallback": "memory:tag-text",
	});
}

export default Component;
