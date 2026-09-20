import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iefwlelij.css';
import '../../css/h/h7exl5bwx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iefwlelij"/><path class="h7exl5bwx"/>`,
		"fallback": "streamline-pixel:social-rewards-like-circle",
	});
}

export default Component;
