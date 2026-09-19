import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/iljv-lz2d.css';
import '../../css/c/cptqxnrfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="iljv-lz2d"/><path class="cptqxnrfy"/></g>`,
		"fallback": "icon-park-solid:press",
	});
}

export default Component;
