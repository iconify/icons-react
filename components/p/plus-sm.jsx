import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh3xl_ida.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uh3xl_ida"/>`,
		"fallback": "heroicons-solid:plus-sm",
	});
}

export default Component;
