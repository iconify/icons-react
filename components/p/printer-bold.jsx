import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo34r_bxy.css';
import '../../css/r/rsxgxvbwd.css';
import '../../css/v/vpom7jbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mo34r_bxy"/><path class="rsxgxvbwd"/><path clip-rule="evenodd" class="vpom7jbce"/>`,
		"fallback": "solar:printer-bold",
	});
}

export default Component;
