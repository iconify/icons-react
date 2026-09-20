import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kk19jxhrb.css';
import '../../css/v/vfzrnnbjc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kk19jxhrb"/><path class="vfzrnnbjc"/></g>`,
		"fallback": "streamline:song-recommendation",
	});
}

export default Component;
