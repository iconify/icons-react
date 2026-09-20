import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vymljlban.css';
import '../../css/x/x7za3cb_f.css';
import '../../css/u/uzzzkhbaf.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vymljlban"/><path class="x7za3cb_f"/><path class="uzzzkhbaf"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:polysexual",
	});
}

export default Component;
