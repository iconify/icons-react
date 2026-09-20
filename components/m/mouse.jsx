import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/zm8tr7b0l.css';
import '../../css/q/qojgbjb5y.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="zm8tr7b0l"/><path class="qojgbjb5y"/></g>`,
		"fallback": "marketeq:mouse",
	});
}

export default Component;
