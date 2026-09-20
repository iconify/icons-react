import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p65_h2bqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p65_h2bqg"/>`,
		"fallback": "streamline-logos:medium-logo-3-solid",
	});
}

export default Component;
