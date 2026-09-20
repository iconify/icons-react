import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gs6q4bbkk.css';
import '../../css/z/zfpck9bep.css';
import '../../css/e/eofjldamr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gs6q4bbkk"/><path class="zfpck9bep"/><path class="eofjldamr"/></g>`,
		"fallback": "streamline:interface-arrows-move-left-down-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big",
	});
}

export default Component;
