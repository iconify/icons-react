import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw6dzhbyw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw6dzhbyw"/>`,
		"fallback": "game-icons:tribal-gear",
	});
}

export default Component;
