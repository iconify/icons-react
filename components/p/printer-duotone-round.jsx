import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b940g53gt.css';
import '../../css/k/kib73vp7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b940g53gt"/><path class="kib73vp7f"/></g>`,
		"fallback": "coolicons:printer-duotone-round",
	});
}

export default Component;
