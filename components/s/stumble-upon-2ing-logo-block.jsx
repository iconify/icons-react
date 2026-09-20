import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8i36fqgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r8i36fqgk"/>`,
		"fallback": "streamline-logos:stumble-upon-2ing-logo-block",
	});
}

export default Component;
