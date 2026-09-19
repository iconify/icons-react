import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm-87qb7c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cm-87qb7c"/>`,
		"fallback": "heroicons:power-16-solid",
	});
}

export default Component;
