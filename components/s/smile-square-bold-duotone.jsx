import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/c/c-hky-bnv.css';
import '../../css/v/vu18-_bab.css';
import '../../css/r/r2dvf4bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path class="c-hky-bnv"/><path class="vu18-_bab"/><path class="r2dvf4bly"/>`,
		"fallback": "solar:smile-square-bold-duotone",
	});
}

export default Component;
