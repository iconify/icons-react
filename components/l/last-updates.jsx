import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t19_d8l-n.css';
import '../../css/u/u7aldsb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t19_d8l-n"/><path class="u7aldsb5b"/>`,
		"fallback": "stash:last-updates",
	});
}

export default Component;
