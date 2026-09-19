import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uyzi7pbha.css';
import '../../css/a/aoxssybqm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="uyzi7pbha"/><path class="aoxssybqm"/></g>`,
		"fallback": "icon-park-solid:phone-booth",
	});
}

export default Component;
