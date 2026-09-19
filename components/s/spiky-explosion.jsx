import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xstesx1iu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xstesx1iu"/>`,
		"fallback": "game-icons:spiky-explosion",
	});
}

export default Component;
