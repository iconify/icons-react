import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0isofspd.css';
import '../../css/u/usr-jnz4k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0isofspd"/><path class="usr-jnz4k"/>`,
		"fallback": "streamline-pixel:interface-essential-microphone",
	});
}

export default Component;
