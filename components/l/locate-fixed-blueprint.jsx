import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lwkt2g_ty.css';
import '../../css/m/miijncbwe.css';
import '../../css/x/x6ru6ciza.css';
import '../../css/w/wh0zujbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lwkt2g_ty wm-deco"/><path class="miijncbwe wm-deco"/><path class="wm-k x6ru6ciza"/><path class="wh0zujbon wm-a"/></g>`,
		"fallback": "withicons:locate-fixed-blueprint",
	});
}

export default Component;
