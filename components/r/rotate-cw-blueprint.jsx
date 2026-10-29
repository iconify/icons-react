import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z7jrhlz4v.css';
import '../../css/p/ppsehacsp.css';
import '../../css/x/xgl_76o8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-k z7jrhlz4v"/><path class="ppsehacsp wm-a"/><circle class="wm-k xgl_76o8k"/></g>`,
		"fallback": "withicons:rotate-cw-blueprint",
	});
}

export default Component;
