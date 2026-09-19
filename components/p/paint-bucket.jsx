import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrrbm2nes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrrbm2nes"/>`,
		"fallback": "game-icons:paint-bucket",
	});
}

export default Component;
