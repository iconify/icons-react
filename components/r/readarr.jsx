import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vggs3v5pz.css';
import '../../css/r/rkl8mz6zh.css';
import '../../css/q/q8l603bxd.css';
import '../../css/r/runcquzpx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vggs3v5pz"/><path class="rkl8mz6zh"/><path class="q8l603bxd"/><path class="runcquzpx"/>`,
		"fallback": "selfhst:readarr",
	});
}

export default Component;
