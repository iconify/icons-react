import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e87_g27hf.css';
import '../../css/m/meixbtdgm.css';
import '../../css/k/kudtq_b6j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e87_g27hf"/><path class="meixbtdgm"/><path class="kudtq_b6j"/>`,
		"fallback": "energy-icons:mop-48",
	});
}

export default Component;
