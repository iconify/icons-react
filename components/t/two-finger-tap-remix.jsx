import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6qtqkf3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s6qtqkf3b"/>`,
		"fallback": "streamline-sharp:two-finger-tap-remix",
	});
}

export default Component;
