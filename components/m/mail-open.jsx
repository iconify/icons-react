import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvwzhz6sl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tvwzhz6sl"/>`,
		"fallback": "heroicons-solid:mail-open",
	});
}

export default Component;
