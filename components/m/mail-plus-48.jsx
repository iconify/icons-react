import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzy9e1bsg.css';
import '../../css/c/c_a48h94z.css';
import '../../css/b/bbxn-dufo.css';
import '../../css/k/kem81wb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzy9e1bsg"/><path class="c_a48h94z"/><path class="bbxn-dufo"/><path class="kem81wb3i"/>`,
		"fallback": "energy-icons:mail-plus-48",
	});
}

export default Component;
