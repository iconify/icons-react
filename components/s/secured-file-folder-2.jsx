import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/yq-me3qpa.css';
import '../../css/n/n3_hncc4o.css';
import '../../css/b/bkqr83b2h.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="yq-me3qpa"/><path class="n3_hncc4o"/><path class="bkqr83b2h"/></g>`,
		"fallback": "marketeq:secured-file-folder-2",
	});
}

export default Component;
