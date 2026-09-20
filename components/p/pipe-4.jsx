import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gz36wzbtw.css';
import '../../css/l/lzgk-k20t.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="gz36wzbtw"/><path class="lzgk-k20t"/></g>`,
		"fallback": "marketeq:pipe-4",
	});
}

export default Component;
