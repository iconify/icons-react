import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nciej2bpn.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/u/urszfnr6d.css';
import '../../css/i/i2d4wactk.css';
import '../../css/k/kzr9ris9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nciej2bpn"/><g class="p_3zmsvya"><path class="urszfnr6d"/><path class="i2d4wactk"/></g><path class="kzr9ris9n"/></g>`,
		"fallback": "tdesign:rice",
	});
}

export default Component;
