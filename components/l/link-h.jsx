import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuwgi8b7w.css';
import '../../css/u/u8r_c8bfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuwgi8b7w"/><path class="u8r_c8bfq"/>`,
		"fallback": "uim:link-h",
	});
}

export default Component;
