import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjpoj8_cg.css';
import '../../css/a/aso22wbxm.css';
import '../../css/s/sv_kzcbth.css';
import '../../css/l/l0exbachf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjpoj8_cg"/><path class="aso22wbxm"/><path class="sv_kzcbth"/><path class="l0exbachf"/>`,
		"fallback": "solar:notification-lines-remove-outline",
	});
}

export default Component;
