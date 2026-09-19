import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q2p1-kb8b.css';
import '../../css/h/hbn7adl-e.css';
import '../../css/i/ibft8obap.css';
import '../../css/h/hpuq-ubde.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q2p1-kb8b"/><path class="hbn7adl-e"/><path class="ibft8obap"/><path class="hpuq-ubde"/></g>`,
		"fallback": "glyphs:watch-outline",
	});
}

export default Component;
