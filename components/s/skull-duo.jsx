import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvjmf6bdk.css';
import '../../css/r/r324r-ddk.css';
import '../../css/h/hk8-dea2h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zvjmf6bdk"/><path class="r324r-ddk"/><path class="hk8-dea2h"/></g>`,
		"fallback": "glyphs:skull-duo",
	});
}

export default Component;
