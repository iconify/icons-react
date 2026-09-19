import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/n/nlwcj0-it.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="kb9zbkb1z"/><path class="nlwcj0-it"/></g>`,
		"fallback": "icon-park-solid:pie-seven",
	});
}

export default Component;
