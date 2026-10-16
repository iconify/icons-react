import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k64ba8bom.css';
import '../../css/x/x5d5bbilf.css';
import '../../css/x/x77xoabnh.css';
import '../../css/y/yoxmr3_pi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k64ba8bom"/><path class="x5d5bbilf"/><path class="x77xoabnh"/><path class="yoxmr3_pi"/>`,
		"fallback": "energy-icons:photodiode-20",
	});
}

export default Component;
