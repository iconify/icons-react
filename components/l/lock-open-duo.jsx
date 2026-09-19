import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dw4grdbmf.css';
import '../../css/n/n8e4n2bvz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dw4grdbmf"/><path class="n8e4n2bvz"/></g>`,
		"fallback": "glyphs:lock-open-duo",
	});
}

export default Component;
