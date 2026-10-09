import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_kyy_bdx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_kyy_bdx"/>`,
		"fallback": "energy-icons:noodles-48",
	});
}

export default Component;
