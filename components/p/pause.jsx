import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0lgi1bob.css';
import '../../css/i/iaya53yxb.css';
import '../../css/b/bw58_rb5h.css';
import '../../css/e/ewf-q02sv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0lgi1bob wm-shadow"/><path class="iaya53yxb wm-k"/><path class="bw58_rb5h wm-k"/><path class="ewf-q02sv wm-shine"/>`,
		"fallback": "withicons-pastel:pause",
	});
}

export default Component;
