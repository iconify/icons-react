import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m10hns7qv.css';
import '../../css/i/i2rrj-bgy.css';
import '../../css/p/pfdeubfir.css';
import '../../css/x/xd0_b4ssm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m10hns7qv"/><path class="i2rrj-bgy"/><path class="pfdeubfir"/><path class="xd0_b4ssm"/>`,
		"fallback": "solar:smartphone-rotate-angle-bold-duotone",
	});
}

export default Component;
