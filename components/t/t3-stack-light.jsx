import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywk57vfom.css';
import '../../css/p/py2rm2fdy.css';
import '../../css/u/u5l_fgbtf.css';

const viewBox = {"width":258,"height":199};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ywk57vfom"/><path class="py2rm2fdy"/><path clip-rule="evenodd" class="u5l_fgbtf"/>`,
		"fallback": "thesvg-color:t3-stack-light",
	});
}

export default Component;
