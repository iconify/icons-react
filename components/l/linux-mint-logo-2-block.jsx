import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrd_d7bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vrd_d7bnc"/>`,
		"fallback": "streamline-logos:linux-mint-logo-2-block",
	});
}

export default Component;
