import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-je94bsz.css';
import '../../css/o/oz6v0cqzz.css';
import '../../css/x/x01h8kb6t.css';
import '../../css/u/u1pyc2bti.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u-je94bsz"/><path class="oz6v0cqzz"/><path clip-rule="evenodd" class="x01h8kb6t"/><path class="u1pyc2bti"/></g>`,
		"fallback": "glyphs:scissors-bold",
	});
}

export default Component;
