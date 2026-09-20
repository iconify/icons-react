import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1_nn9ipg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s1_nn9ipg"/>`,
		"fallback": "streamline-logos:telegram-logo-2-block",
	});
}

export default Component;
