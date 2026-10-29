import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wosekoz_u.css';
import '../../css/n/nge5cfbll.css';
import '../../css/w/ws6itibsn.css';
import '../../css/m/msx4mwb6m.css';
import '../../css/z/z8g64ybha.css';
import '../../css/l/lfoplq4du.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco wosekoz_u"/><path class="nge5cfbll wm-deco"/><path class="wm-k ws6itibsn"/><circle class="msx4mwb6m wm-a"/><circle class="wm-a z8g64ybha"/><path class="lfoplq4du wm-k"/></g>`,
		"fallback": "withicons:settings-2-blueprint",
	});
}

export default Component;
