import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyl5x0xhs.css';
import '../../css/u/udu2-jboo.css';
import '../../css/i/i0745hb7h.css';
import '../../css/x/xl1d1vb_i.css';
import '../../css/u/ubf44wbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k xyl5x0xhs"/><path class="udu2-jboo wm-a"/><path class="i0745hb7h wm-a"/><path class="wm-a xl1d1vb_i"/><path class="ubf44wbel wm-a"/>`,
		"fallback": "withicons-bauhaus:qr-code",
	});
}

export default Component;
