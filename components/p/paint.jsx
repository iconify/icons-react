import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/iufyv-hoo.css';
import '../../css/k/kpzem0bbg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="iufyv-hoo"/><path class="kpzem0bbg"/></g>`,
		"fallback": "icon-park-solid:paint",
	});
}

export default Component;
