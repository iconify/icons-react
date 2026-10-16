import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fif1fofps.css';
import '../../css/k/kj_8dbkmk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fif1fofps"/><path class="kj_8dbkmk"/>`,
		"fallback": "energy-icons:monopole-pylon-48-bold",
	});
}

export default Component;
