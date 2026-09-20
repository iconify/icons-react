import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gr-o4kbhs.css';
import '../../css/a/aewr-ybpi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gr-o4kbhs"/><path class="aewr-ybpi"/></g>`,
		"fallback": "streamline:interface-file-bookmark-text-common-bookmark",
	});
}

export default Component;
