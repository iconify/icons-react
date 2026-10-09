import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t__07qb8r.css';
import '../../css/z/z7w62dbic.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t__07qb8r"/><path class="z7w62dbic"/>`,
		"fallback": "energy-icons:university-20",
	});
}

export default Component;
