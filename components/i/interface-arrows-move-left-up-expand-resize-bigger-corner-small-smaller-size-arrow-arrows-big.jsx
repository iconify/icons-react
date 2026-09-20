import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/asex6cchs.css';
import '../../css/x/xw940abtl.css';
import '../../css/i/i1zyer-my.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="asex6cchs"/><path class="xw940abtl"/><path class="i1zyer-my"/></g>`,
		"fallback": "streamline:interface-arrows-move-left-up-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big",
	});
}

export default Component;
