import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o364n5cnh.css';
import '../../css/z/z3qqnubwe.css';
import '../../css/z/z1ppbibmx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o364n5cnh"/><path class="z3qqnubwe"/><path class="z1ppbibmx"/></g>`,
		"fallback": "glyphs:paste",
	});
}

export default Component;
