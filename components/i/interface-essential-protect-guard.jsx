import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq6oioi6o.css';
import '../../css/l/lcqwnhbms.css';
import '../../css/y/yz_r44box.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq6oioi6o"/><path class="lcqwnhbms"/><path class="yz_r44box"/>`,
		"fallback": "streamline-pixel:interface-essential-protect-guard",
	});
}

export default Component;
