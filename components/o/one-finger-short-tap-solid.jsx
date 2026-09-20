import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa6oe_bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xa6oe_bbv"/>`,
		"fallback": "streamline-sharp:one-finger-short-tap-solid",
	});
}

export default Component;
