import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx4m1cb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tx4m1cb0n"/>`,
		"fallback": "streamline-logos:stumble-upong-1ing-logo-solid",
	});
}

export default Component;
