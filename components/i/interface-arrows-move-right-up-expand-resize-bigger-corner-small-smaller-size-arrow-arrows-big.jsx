import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j7q1yzblr.css';
import '../../css/g/g7d4wabyp.css';
import '../../css/h/hk658tb-a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j7q1yzblr"/><path class="g7d4wabyp"/><path class="hk658tb-a"/></g>`,
		"fallback": "streamline:interface-arrows-move-right-up-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big",
	});
}

export default Component;
