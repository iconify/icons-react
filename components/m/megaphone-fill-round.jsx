import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig5b-xtid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig5b-xtid"/>`,
		"fallback": "coolicons:megaphone-fill-round",
	});
}

export default Component;
