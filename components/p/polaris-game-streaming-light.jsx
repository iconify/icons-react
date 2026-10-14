import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1kbat3fg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1kbat3fg"/>`,
		"fallback": "selfhst:polaris-game-streaming-light",
	});
}

export default Component;
