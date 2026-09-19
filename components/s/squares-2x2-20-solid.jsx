import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc28kmb0a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lc28kmb0a"/>`,
		"fallback": "heroicons:squares-2x2-20-solid",
	});
}

export default Component;
