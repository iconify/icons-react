import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rcld46bpd.css';
import '../../css/b/bvxg-tnme.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/z/zcrcpgjjd.css';
import '../../css/v/v2dzgoy5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rcld46bpd wm-deco"/><path class="bvxg-tnme wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="zcrcpgjjd"/><path class="v2dzgoy5e"/></g>`,
		"fallback": "withicons:school-blueprint",
	});
}

export default Component;
