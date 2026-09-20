import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/i0ds-c_by.css';
import '../../css/b/b9b28b8ye.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="i0ds-c_by"/><path class="b9b28b8ye"/></g>`,
		"fallback": "marketeq:video",
	});
}

export default Component;
