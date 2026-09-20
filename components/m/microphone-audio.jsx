import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/unxfr-b2r.css';
import '../../css/a/alu59k90f.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="unxfr-b2r"/><path class="alu59k90f"/></g>`,
		"fallback": "marketeq:microphone-audio",
	});
}

export default Component;
