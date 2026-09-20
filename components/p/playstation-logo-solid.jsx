import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2ex7k_ym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2ex7k_ym"/>`,
		"fallback": "streamline-logos:playstation-logo-solid",
	});
}

export default Component;
