import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv2q8ftgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dv2q8ftgt"/>`,
		"fallback": "iconamoon:player-play-fill",
	});
}

export default Component;
