import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vo_jdq92d.css';
import '../../css/j/jv0ktfj0k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vo_jdq92d"/><path class="jv0ktfj0k"/></g>`,
		"fallback": "streamline:printer",
	});
}

export default Component;
