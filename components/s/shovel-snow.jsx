import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/d/dzmci1bcl.css';
import '../../css/t/tlq4hhbad.css';
import '../../css/u/u4jf9uu6j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="dzmci1bcl"/><path class="tlq4hhbad"/><path class="u4jf9uu6j"/></g>`,
		"fallback": "glyphs-poly:shovel-snow",
	});
}

export default Component;
