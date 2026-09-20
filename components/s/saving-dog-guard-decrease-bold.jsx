import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na-zfyb3o.css';
import '../../css/h/hj4s1e3-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na-zfyb3o"/><path class="hj4s1e3-u"/>`,
		"fallback": "streamline-ultimate:saving-dog-guard-decrease-bold",
	});
}

export default Component;
