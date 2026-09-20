import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b7vkytawf.css';
import '../../css/p/pns-0bduc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b7vkytawf"/><path class="pns-0bduc"/></g>`,
		"fallback": "streamline:play-station",
	});
}

export default Component;
