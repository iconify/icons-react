import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc9wtibdc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc9wtibdc"/>`,
		"fallback": "f7:text-badge-xmark",
	});
}

export default Component;
