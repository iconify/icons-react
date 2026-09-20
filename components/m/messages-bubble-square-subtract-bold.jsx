import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynxh_kl6a.css';
import '../../css/w/wboyqji3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynxh_kl6a"/><path class="wboyqji3v"/>`,
		"fallback": "streamline-ultimate:messages-bubble-square-subtract-bold",
	});
}

export default Component;
