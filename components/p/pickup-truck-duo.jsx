import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/csptg4b9v.css';
import '../../css/h/heeygwb2h.css';
import '../../css/l/l9ophzv3f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="csptg4b9v"/><path class="heeygwb2h"/><path class="l9ophzv3f"/></g>`,
		"fallback": "glyphs:pickup-truck-duo",
	});
}

export default Component;
