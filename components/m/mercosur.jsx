import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/p/pvppo8lbv.css';
import '../../css/r/rp7v3sbxc.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="pvppo8lbv"/><path class="rp7v3sbxc"/>`,
		"fallback": "tabler-flags:mercosur",
	});
}

export default Component;
