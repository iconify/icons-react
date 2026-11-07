import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/che3aw1ld.css';
import '../../css/v/vu18-_bab.css';
import '../../css/l/lg9shfpyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="che3aw1ld"/><path class="vu18-_bab"/><path class="lg9shfpyb"/>`,
		"fallback": "solar:sad-circle-outline",
	});
}

export default Component;
