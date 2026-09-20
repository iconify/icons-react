import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u68y6wqkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u68y6wqkn"/>`,
		"fallback": "streamline-logos:vodafone-logo-block",
	});
}

export default Component;
