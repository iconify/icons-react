import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zszfq8dqs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zszfq8dqs"/>`,
		"fallback": "game-icons:plain-circle",
	});
}

export default Component;
