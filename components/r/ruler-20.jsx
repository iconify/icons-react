import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6etv2b0x.css';
import '../../css/q/qy70odgzs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6etv2b0x"/><path class="qy70odgzs"/>`,
		"fallback": "energy-icons:ruler-20",
	});
}

export default Component;
