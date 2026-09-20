import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgmgfacjn.css';
import '../../css/i/ip95smfdk.css';
import '../../css/h/h02m9fm5b.css';
import '../../css/s/szhd4pbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kgmgfacjn"/><path class="ip95smfdk"/><path class="h02m9fm5b"/><path class="szhd4pbou"/></g>`,
		"fallback": "tdesign:tower-clock",
	});
}

export default Component;
