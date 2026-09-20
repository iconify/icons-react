import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w7700gb4v.css';
import '../../css/y/yph-txb3i.css';
import '../../css/h/huttp5b3q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w7700gb4v"/><rect class="yph-txb3i"/><path class="huttp5b3q"/></g>`,
		"fallback": "streamline:interface-layout-border-frame-border-cell-format-formatting-full",
	});
}

export default Component;
