import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/gl4r0j6jj.css';
import '../../css/r/rbyeil6uw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="gl4r0j6jj"/><path class="rbyeil6uw"/></g>`,
		"fallback": "icon-park-outline:nut",
	});
}

export default Component;
