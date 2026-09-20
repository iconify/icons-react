import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6fh8eb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6fh8eb2b"/>`,
		"fallback": "streamline-logos:pinterest-logo",
	});
}

export default Component;
