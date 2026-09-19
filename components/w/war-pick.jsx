import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg8pnpb-u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg8pnpb-u"/>`,
		"fallback": "game-icons:war-pick",
	});
}

export default Component;
