import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lj43ppoag.css';
import '../../css/y/ymqifpb2e.css';
import '../../css/h/hr9jw4qtz.css';
import '../../css/z/z7pd3exzs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lj43ppoag"/><path class="ymqifpb2e"/><path class="hr9jw4qtz"/><path class="z7pd3exzs"/></g>`,
		"fallback": "glyphs:note-sticky-duo",
	});
}

export default Component;
