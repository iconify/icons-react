import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuxo34wrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuxo34wrg"/>`,
		"fallback": "streamline-ultimate:style-two-pin-home-bold",
	});
}

export default Component;
