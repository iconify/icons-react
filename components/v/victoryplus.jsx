import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxwuct3xa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxwuct3xa"/>`,
		"fallback": "cbi:victoryplus",
	});
}

export default Component;
