import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwxh6wbxo.css';
import '../../css/d/dep5o0bgr.css';
import '../../css/u/uypy_pbjf.css';
import '../../css/x/xcufq3-ob.css';
import '../../css/x/x1dbbnbjc.css';
import '../../css/r/ro1ftgbbo.css';
import '../../css/u/u_l2q8bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwxh6wbxo"/><path class="dep5o0bgr"/><path class="uypy_pbjf"/><path class="xcufq3-ob"/><path class="x1dbbnbjc"/><path class="ro1ftgbbo"/><path class="u_l2q8bcl"/>`,
		"fallback": "token:sdn",
	});
}

export default Component;
