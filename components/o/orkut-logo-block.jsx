import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2g0k_bbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u2g0k_bbw"/>`,
		"fallback": "streamline-logos:orkut-logo-block",
	});
}

export default Component;
