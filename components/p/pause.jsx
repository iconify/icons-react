import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp97lfoxd.css';
import '../../css/k/k3ypocbdl.css';
import '../../css/t/tspdbdasy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rp97lfoxd"><path clip-rule="evenodd" class="k3ypocbdl"/><path class="tspdbdasy"/></g>`,
		"fallback": "glyphs-poly:pause",
	});
}

export default Component;
