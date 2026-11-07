import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdjiz7b1s.css';
import '../../css/t/tx7dcyx9v.css';
import '../../css/k/k-6z9bsqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdjiz7b1s"/><path class="tx7dcyx9v"/><path class="k-6z9bsqk"/>`,
		"fallback": "solar:monitor-camera-bold-duotone",
	});
}

export default Component;
