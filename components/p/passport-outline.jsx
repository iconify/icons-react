import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9ooe_rjk.css';
import '../../css/l/ld8afubkm.css';
import '../../css/n/n1ueciogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u9ooe_rjk"/><path class="ld8afubkm"/><path clip-rule="evenodd" class="n1ueciogc"/>`,
		"fallback": "solar:passport-outline",
	});
}

export default Component;
