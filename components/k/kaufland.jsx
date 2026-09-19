import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb1dfs46w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb1dfs46w"/>`,
		"fallback": "cbi:kaufland",
	});
}

export default Component;
