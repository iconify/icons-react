import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di_vi8bdx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di_vi8bdx"/>`,
		"fallback": "game-icons:tec-9",
	});
}

export default Component;
