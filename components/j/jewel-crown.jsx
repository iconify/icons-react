import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zznm4mbaq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zznm4mbaq"/>`,
		"fallback": "game-icons:jewel-crown",
	});
}

export default Component;
