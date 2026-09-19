import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbup64s8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbup64s8r"/>`,
		"fallback": "cbi:maybach",
	});
}

export default Component;
