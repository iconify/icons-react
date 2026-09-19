import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xel_qjvvf.css';
import '../../css/d/dxpqquqan.css';
import '../../css/v/vw1njlwto.css';
import '../../css/b/bpbf5viwi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xel_qjvvf"/><path class="dxpqquqan"/><path clip-rule="evenodd" class="vw1njlwto"/><path class="bpbf5viwi"/></g>`,
		"fallback": "glyphs-poly:quote",
	});
}

export default Component;
