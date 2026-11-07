import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/t/t8f86fbfc.css';
import '../../css/m/m4styj0nb.css';
import '../../css/m/mz1do-bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="t8f86fbfc"/><path class="m4styj0nb"/><path class="mz1do-bvr"/>`,
		"fallback": "solar:text-cross-square-bold-duotone",
	});
}

export default Component;
