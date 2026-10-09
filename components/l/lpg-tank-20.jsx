import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7ro5gmkv.css';
import '../../css/k/kbep-sbgp.css';
import '../../css/k/km0u10_mc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7ro5gmkv"/><path class="kbep-sbgp"/><path class="km0u10_mc"/>`,
		"fallback": "energy-icons:lpg-tank-20",
	});
}

export default Component;
