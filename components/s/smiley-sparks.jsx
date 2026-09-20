import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gz2sxh8qk.css';
import '../../css/i/i6vh5obqi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gz2sxh8qk"/><path class="i6vh5obqi"/></g>`,
		"fallback": "streamline:smiley-sparks",
	});
}

export default Component;
