import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vfyzo6bny.css';
import '../../css/r/r22h40bsk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="vfyzo6bny"/><path class="r22h40bsk"/></g>`,
		"fallback": "icon-park-solid:macadamia-nut",
	});
}

export default Component;
