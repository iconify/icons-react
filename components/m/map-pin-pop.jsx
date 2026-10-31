import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0c_ah97o.css';
import '../../css/n/n-r2dvb5e.css';
import '../../css/r/rhqk5qbtw.css';
import '../../css/b/bw2-82bye.css';
import '../../css/z/zxqfzg_hl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b0c_ah97o"/><path class="n-r2dvb5e"/><path class="rhqk5qbtw"/><path class="bw2-82bye"/><path class="zxqfzg_hl"/></g>`,
		"fallback": "streamline-kameleon-color:map-pin-pop",
	});
}

export default Component;
