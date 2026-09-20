import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpkb6h12s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jpkb6h12s"/>`,
		"fallback": "streamline-logos:lubuntu-logo-block",
	});
}

export default Component;
