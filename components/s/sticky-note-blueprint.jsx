import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hcmuc9bki.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/x/xh417cinu.css';
import '../../css/k/k856a4z_h.css';
import '../../css/i/if8scnbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hcmuc9bki wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k xh417cinu"/><path class="k856a4z_h wm-a"/><path class="if8scnbfc wm-k"/></g>`,
		"fallback": "withicons:sticky-note-blueprint",
	});
}

export default Component;
