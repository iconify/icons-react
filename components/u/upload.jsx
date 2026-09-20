import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cthd3ubpk.css';
import '../../css/p/pz2e0kkio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cthd3ubpk"/><path class="pz2e0kkio"/>`,
		"fallback": "prime:upload",
	});
}

export default Component;
