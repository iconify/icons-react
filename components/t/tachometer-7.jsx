import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yhy_qabht.css';
import '../../css/u/uoathacvi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yhy_qabht"/><path class="uoathacvi"/></g>`,
		"fallback": "glyphs:tachometer-7",
	});
}

export default Component;
