import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et59vtbnu.css';
import '../../css/q/qazb7jbeb.css';
import '../../css/k/kkhl62fff.css';
import '../../css/o/o-v99zb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et59vtbnu"/><path class="qazb7jbeb"/><path class="kkhl62fff"/><path class="o-v99zb0r"/>`,
		"fallback": "solar:password-minimalistic-bold-duotone",
	});
}

export default Component;
