import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y9ra9v_nc.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/m/mt1kbjbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y9ra9v_nc"/><circle class="shu3xdl9q"/><path class="mt1kbjbkl"/></g>`,
		"fallback": "hugeicons:sphere",
	});
}

export default Component;
