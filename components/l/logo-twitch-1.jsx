import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h20g7xb6e.css';
import '../../css/o/o557kdpvn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h20g7xb6e"/><path class="o557kdpvn"/>`,
		"fallback": "streamline-pixel:logo-twitch-1",
	});
}

export default Component;
