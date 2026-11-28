import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nds8wgdzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nds8wgdzq primary"/>`,
		"fallback": "iconaut:repeat-twice-duotone",
	});
}

export default Component;
