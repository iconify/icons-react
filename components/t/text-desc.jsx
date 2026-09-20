import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb6olcl2f.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb6olcl2f"/>`,
		"fallback": "iwwa:text-desc",
	});
}

export default Component;
