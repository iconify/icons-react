import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/of6s0nb6x.css';
import '../../css/z/z898vhn-b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="of6s0nb6x"/><path class="z898vhn-b"/></g>`,
		"fallback": "glyphs:robot-head",
	});
}

export default Component;
