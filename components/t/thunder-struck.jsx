import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vipnjx9wc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vipnjx9wc"/>`,
		"fallback": "game-icons:thunder-struck",
	});
}

export default Component;
