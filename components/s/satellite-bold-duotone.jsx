import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi25mkbtf.css';
import '../../css/m/mpywkgvrr.css';
import '../../css/z/zi6a9qsdc.css';
import '../../css/o/o5eicpnmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bi25mkbtf"/><path class="mpywkgvrr"/><path class="zi6a9qsdc"/><path class="o5eicpnmn"/>`,
		"fallback": "solar:satellite-bold-duotone",
	});
}

export default Component;
