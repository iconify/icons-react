import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w482_wbjc.css';
import '../../css/a/a0-ehlbuo.css';
import '../../css/z/zs0elrbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w482_wbjc"/><path class="a0-ehlbuo"/><path class="zs0elrbfp"/>`,
		"fallback": "solar:layout-freeform-bold",
	});
}

export default Component;
