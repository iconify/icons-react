import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/v2w0mmcjd.css';
import '../../css/u/usydi32ak.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="v2w0mmcjd"/><path class="usydi32ak"/></g>`,
		"fallback": "marketeq:note-book",
	});
}

export default Component;
