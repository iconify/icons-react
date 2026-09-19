import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/t/t43qkv96f.css';
import '../../css/y/y2w54rntw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="t43qkv96f"/><path class="y2w54rntw"/></g>`,
		"fallback": "glyphs:laugh-beam-duo",
	});
}

export default Component;
