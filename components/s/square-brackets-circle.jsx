import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y-_1uigqo.css';
import '../../css/x/xtk255bwe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y-_1uigqo"/><path class="xtk255bwe"/></g>`,
		"fallback": "streamline:square-brackets-circle",
	});
}

export default Component;
