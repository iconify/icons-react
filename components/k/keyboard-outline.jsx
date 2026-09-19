import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/au-rp_b6w.css';
import '../../css/k/kzl624k_z.css';
import '../../css/m/mve3u90ux.css';
import '../../css/m/m80nkbbsv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="au-rp_b6w"/><path clip-rule="evenodd" class="kzl624k_z"/><path class="mve3u90ux"/><path clip-rule="evenodd" class="m80nkbbsv"/></g>`,
		"fallback": "glyphs:keyboard-outline",
	});
}

export default Component;
