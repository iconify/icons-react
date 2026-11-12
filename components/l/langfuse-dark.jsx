import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfqg2gjhk.css';
import '../../css/z/zq-xd4b2s.css';
import '../../css/x/xv20pn3tn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfqg2gjhk"/><path class="zq-xd4b2s"/><path class="xv20pn3tn"/>`,
		"fallback": "selfhst:langfuse-dark",
	});
}

export default Component;
