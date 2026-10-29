import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/axhb9qg_k.css';
import '../../css/h/h5l999bxg.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/v/vkn5_ac_i.css';
import '../../css/x/x8izv9k1w.css';
import '../../css/l/lvenwvbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="axhb9qg_k wm-deco"/><path class="h5l999bxg wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="vkn5_ac_i wm-k"/><path class="wm-a x8izv9k1w"/><path class="lvenwvbyo wm-k"/></g>`,
		"fallback": "withicons:scan-barcode-blueprint",
	});
}

export default Component;
