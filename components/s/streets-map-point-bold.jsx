import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9aix1bex.css';
import '../../css/h/hh1t7h7bu.css';
import '../../css/e/e-2fhubal.css';
import '../../css/n/n6lshjbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9aix1bex"/><path class="hh1t7h7bu"/><path clip-rule="evenodd" class="e-2fhubal"/><path class="n6lshjbtf"/>`,
		"fallback": "solar:streets-map-point-bold",
	});
}

export default Component;
