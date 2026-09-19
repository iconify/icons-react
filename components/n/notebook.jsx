import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6sabc5xg.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6sabc5xg"/>`,
		"fallback": "whh:notebook",
	});
}

export default Component;
