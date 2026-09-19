import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8tswj24l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s8tswj24l"/>`,
		"fallback": "heroicons-solid:table-cells",
	});
}

export default Component;
