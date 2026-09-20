import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bszvb5wjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bszvb5wjn"/>`,
		"fallback": "streamline-logos:stellar-logo-block",
	});
}

export default Component;
