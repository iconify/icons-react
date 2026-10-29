import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nlv1jkb4s.css';
import '../../css/j/jm7s3nbjh.css';
import '../../css/b/bxx_x96bn.css';
import '../../css/z/z209u23kv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nlv1jkb4s"/><path class="jm7s3nbjh wm-shadow"/><path class="bxx_x96bn"/><path class="z209u23kv"/></g>`,
		"fallback": "withicons:kite-engrave",
	});
}

export default Component;
