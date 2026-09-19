import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj97bxb2b.css';
import '../../css/d/ds5jgsbxn.css';
import '../../css/z/zkybc5m-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj97bxb2b"/><circle class="ds5jgsbxn"/><path class="zkybc5m-f"/>`,
		"fallback": "eos-icons:kubelet-outlined",
	});
}

export default Component;
