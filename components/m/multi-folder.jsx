import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/s3isivb-u.css';
import '../../css/y/y8ymmydcb.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="s3isivb-u"/><path class="y8ymmydcb"/></g>`,
		"fallback": "marketeq:multi-folder",
	});
}

export default Component;
