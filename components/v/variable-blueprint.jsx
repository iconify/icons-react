import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bmx-vfbkn.css';
import '../../css/i/if6hcbcca.css';
import '../../css/x/xixii0i5t.css';
import '../../css/s/snck16e5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bmx-vfbkn wm-deco"/><path class="if6hcbcca wm-deco"/><path class="wm-k xixii0i5t"/><path class="snck16e5j wm-a"/></g>`,
		"fallback": "withicons:variable-blueprint",
	});
}

export default Component;
