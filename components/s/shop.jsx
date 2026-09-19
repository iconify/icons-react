import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/prvg-xbay.css';
import '../../css/x/x0yq8fapu.css';
import '../../css/n/ny1ve4bvd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="prvg-xbay"/><path class="x0yq8fapu"/><path class="ny1ve4bvd"/></g>`,
		"fallback": "icon-park-outline:shop",
	});
}

export default Component;
