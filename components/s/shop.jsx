import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fagbf2b8f.css';
import '../../css/x/x0yq8fapu.css';
import '../../css/r/r1o46bcgn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="fagbf2b8f"/><path class="x0yq8fapu"/><path class="r1o46bcgn"/></g>`,
		"fallback": "icon-park-solid:shop",
	});
}

export default Component;
