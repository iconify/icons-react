import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7w-jwb5w.css';
import '../../css/j/jc_hrb9vb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m7w-jwb5w"/><path class="jc_hrb9vb"/></g>`,
		"fallback": "glyphs:sliders-duo",
	});
}

export default Component;
