import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gev-dachs.css';
import '../../css/u/unw373bpv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gev-dachs"/><path class="unw373bpv"/>`,
		"fallback": "fxemoji:sidewaysblackrightpointingindex",
	});
}

export default Component;
