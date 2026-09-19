import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ladf9qkxg.css';
import '../../css/x/x28r8k_ex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ladf9qkxg"/><path class="x28r8k_ex"/>`,
		"fallback": "bxs:thermometer",
	});
}

export default Component;
