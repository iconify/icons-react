import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/io8dijb2e.css';
import '../../css/v/vrjw5bceo.css';
import '../../css/f/fbyqsqb1z.css';
import '../../css/a/a4qolv-_m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="io8dijb2e"/><path class="vrjw5bceo"/><path class="fbyqsqb1z"/><path class="a4qolv-_m"/></g>`,
		"fallback": "glyphs:queen",
	});
}

export default Component;
