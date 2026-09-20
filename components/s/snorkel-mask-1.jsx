import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-98d_b4z.css';
import '../../css/n/n2z57nbad.css';
import '../../css/p/p8dkgbc2i.css';
import '../../css/q/qbqtv03fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k-98d_b4z"/><path class="n2z57nbad"/><path class="p8dkgbc2i"/><path class="qbqtv03fz"/></g>`,
		"fallback": "streamline-cyber-color:snorkel-mask-1",
	});
}

export default Component;
