import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gmeuf3gzy.css';
import '../../css/t/tvc4p7bak.css';
import '../../css/g/gnn1sbbcb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gmeuf3gzy"/><path clip-rule="evenodd" class="tvc4p7bak"/><path class="gnn1sbbcb"/></g>`,
		"fallback": "glyphs-poly:laptop-code",
	});
}

export default Component;
