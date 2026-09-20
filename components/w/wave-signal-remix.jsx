import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp6na81yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vp6na81yx"/>`,
		"fallback": "streamline-sharp:wave-signal-remix",
	});
}

export default Component;
