import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dex3vgbjj.css';
import '../../css/l/lhipc3bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dex3vgbjj"/><path class="lhipc3bbq"/></g>`,
		"fallback": "coolicons:stop-duotone-round",
	});
}

export default Component;
