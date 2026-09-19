import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac_vz1bhc.css';
import '../../css/z/zgk5_n2-v.css';

const viewBox = {"width":17,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac_vz1bhc"/><path class="zgk5_n2-v"/>`,
		"fallback": "fontisto:metro",
	});
}

export default Component;
