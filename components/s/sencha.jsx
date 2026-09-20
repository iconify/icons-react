import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duv2dac2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duv2dac2p"/>`,
		"fallback": "simple-icons:sencha",
	});
}

export default Component;
