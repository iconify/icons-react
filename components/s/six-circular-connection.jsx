import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rtwj0brya.css';
import '../../css/a/a1smiveyc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="rtwj0brya"/><path class="a1smiveyc"/></g>`,
		"fallback": "icon-park-solid:six-circular-connection",
	});
}

export default Component;
