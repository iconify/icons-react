import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4qn6957a.css';
import '../../css/i/ir3ncbbaj.css';
import '../../css/t/ttmv56b5u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n4qn6957a"/><path clip-rule="evenodd" class="ir3ncbbaj"/><path class="ttmv56b5u"/></g>`,
		"fallback": "glyphs:signature-duo",
	});
}

export default Component;
