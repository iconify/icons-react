import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7jj86bvz.css';
import '../../css/q/qc-zzbbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g7jj86bvz"/><path class="qc-zzbbdr"/></g>`,
		"fallback": "coolicons:ruler-duotone-round",
	});
}

export default Component;
