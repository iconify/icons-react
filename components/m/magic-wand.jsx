import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okeji4bql.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okeji4bql"/>`,
		"fallback": "icomoon-free:magic-wand",
	});
}

export default Component;
