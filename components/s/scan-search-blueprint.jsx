import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vq6uo5d_c.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/u/udrcxhb7o.css';
import '../../css/i/iqqttfbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vq6uo5d_c wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="l9lv5_bcf wm-k"/><circle class="udrcxhb7o wm-a"/><path class="iqqttfbhi wm-a"/></g>`,
		"fallback": "withicons:scan-search-blueprint",
	});
}

export default Component;
