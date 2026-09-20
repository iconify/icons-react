import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yiukdobpq.css';
import '../../css/m/mmvlngp9y.css';
import '../../css/t/tip362b0e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yiukdobpq"/><path class="mmvlngp9y"/><path class="tip362b0e"/></g>`,
		"fallback": "streamline:mail-incoming",
	});
}

export default Component;
