import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uci1gs-og.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uci1gs-og"/>`,
		"fallback": "streamline-sharp:paperclip-2",
	});
}

export default Component;
