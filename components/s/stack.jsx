import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s3o2xd_tt.css';
import '../../css/w/wvfwkdb0h.css';
import '../../css/b/blez6fbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s3o2xd_tt"/><path clip-rule="evenodd" class="wvfwkdb0h"/><path class="blez6fbhp"/></g>`,
		"fallback": "gg:stack",
	});
}

export default Component;
